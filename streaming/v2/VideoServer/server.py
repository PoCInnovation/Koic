import socket
from threading import Lock

class Server:
    MAX_SIMULTANEOUS_CLIENTS = 30

    def __init__(self, host, port):
        self._serv = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.host = (host, port)
        self._serv.bind(self.host)
        self._serv.listen(Server.MAX_SIMULTANEOUS_CLIENTS)
        self.running = False
        self.clients = []
        self.lock = Lock()

    def start(self):
        try:
            self.running = True

            print("[+] Server Listening on: {}:{}".format(self.host[0], self.host[1]))
            while self.running:
                client = self._serv.accept()[0].makefile('wb')
                print("[+] New client connected")
                self.lock.acquire()
                self.clients.append(client)
                self.lock.release()

        except:
            print("[-] Interruption")
            self.stop()

    def isRunning(self):
        return self.running

    def stop(self):
        self.lock.acquire()
        self.running = False
        for client in self.clients:
            client.close()
        self._serv.close()
        self.lock.release()

    def write(self, b):
        self.lock.acquire()
        for client in self.clients:
            client.write(b)
        self.lock.release()

    def __del__(self):
        if self.running:
            self._serv.stop()
