# KOIC

Koic is a connected scarecrow who is equipped with cameras that film the terrain in real time. The filmed images are then analysed. Depending on the animal that is hit, the scarecrow will choose a suitable way to repel it in a natural way.

## Installation

### Prerequisites
```
Docker
Flask
```
### Install repository
```
$ git clone git@github.com:PoCInnovation/Koic.git
$ cd Koic
```

### Install packages and dependencies
```
Fedora : $ sudo dnf install libpq-devel
Ubuntu: $ sudo apt-get install libpq-dev
Debian / OS X : $ brew install postgresql
$ koic-app/sudo npm install --global expo-cli
$ koic-app/sudo npm install
$ pip install -r API/requirements.txt
```
## Raspi installation


For this part you must have your raspberry pi connected to the same local network as your computer.

Get your ip address like this:
```
$ ifconfig
```
On the terminal of your computer, look for the ip of your raspberry pi:
```
$ sudo nmap -sn <ip_address>.0/24
```
Once you have the address, establish the ssh connection with your raspberry pi:
```
$ ssh pi@<ip_address_raspberry_pi>
```
Once connected:
```
$ git clone git@github.com:PoCInnovation/Koic.git
```

## Quick Start

```
$ echo IP=<ip_adress> >> API/.env
$ echo IP=<ip_adress> >> koic-app/.env
$ API/ docker-compose up
$ pyhton3 API/migrations/setup.py
$ API/python3 app.py #turn in new terminal
$ koic-app/expo start #turn in new terminal
$ kafka-docker/docker-compose up #in the raspberry pi
```

## Features

### Application

The application is divided by a tab that allows you to navigate between the different features like :

-  Be able to view the activity on the field in real time thanks to the cameras placed on it.
- View and graph the data collected and analyse the behaviour of the pests.

- Make adjustments to the entire application and the cameras.

- Report a problem and able to contact support.

### Scarecrow connected

- Cameras that can film the field in real time and send information that is processed by an API and sent to the application 

## Authors
- [Thomas Michel](https://github.com/pr0m3th3usEx)
- [Inès Maaroufi](https://github.com/Happinesseuh)

Give a ⭐️ if you like this project!
