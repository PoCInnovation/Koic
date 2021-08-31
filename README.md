<h1 align=center>
Koic
</h1>

## Desciption

Koic is a **connected scarecrow** who is equipped with cameras that film the terrain in real time.  
The filmed images are then analysed. Depending on the animal that is hit, the scarecrow will choose a suitable way **to repel it in a natural way.**

## Install

#### :rocket: Clone repository
You have to clone the repo on the **Raspberry Pi** and your **computer**.

```shell
git clone git@github.com:PoCInnovation/Koic.git
```

#### :warning: Requirement

- [Node](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker-compose](https://docs.docker.com/compose/install/)
- Have a Raspberry Pi and its camera module (PiCamera)

### Install packages and dependencies
```bash
sudo dnf install libpq-devel    # Fedora
sudo apt-get install libpq-dev  # Ubuntu
brew install postgresql         # Debian / OS X
```

```bash
koic-app/sudo npm install --global expo-cli
koic-app/sudo npm install
python -m pip install -r API/requirements.txt
```

### Raspi installation

Your raspberry pi and your computer must be on the **same network**.


```diff
-Récupèrer l'address ip de la pi tu peux faire un script à lancer-
```

Get your ip address like this:
```bash
hostname -I | cut -d' ' -f1
```

On the terminal of your computer, look for the ip of your raspberry pi:
```bash
sudo nmap -sn <ip_address>.0/24
```

Once you have the address, establish the **ssh connection** with your raspberry pi:

```bash
ssh pi@<ip_address_raspberry_pi>
```

```diff
-Peut etre dire ce qu'il faut install sur la pi ?-
```


## Quick Start
### On your computer

```diff
-Les commandes à lancer sur ton pc-
!~ Séparer avec l'app ~!
```

```bash
echo IP=<ip_adress> >> API/.env
echo IP=<ip_adress> >> koic-app/.env
API/ docker-compose up
pyhton3 API/migrations/setup.py
API/python3 app.py #turn in new terminal
koic-app/expo start #turn in new terminal
kafka-docker/docker-compose up #in the raspberry pi
```

### On your raspberry pi

```diff
-Les commandes à lancer sur la pi-
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

| [<img src="https://github.com/pr0m3th3usEx.png?size=85" width=85><br><sub>Thomas Michel</sub>](https://github.com/pr0m3th3usEx) | [<img src="https://github.com/Happinesseuh.png?size=85" width=85><br><sub>Inès Maaroufi</sub>](https://github.com/Happinesseuh) 
| :---: | :---: |
<h2 align=center>
Organization
</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white">
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white">
    </a>
</p>

> :rocket: Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.