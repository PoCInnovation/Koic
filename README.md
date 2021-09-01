<h1 align=center>
Koic
</h1>

## Desciption

Koic is a **connected scarecrow** who is equipped with cameras that film the terrain in real time.  
The filmed images are then analysed. Depending on the animal that is hit, the scarecrow will choose a suitable way **to repel it in a natural way.**

## Summary
- [Desciption](#desciption)
- [Summary](#summary)
- [Install](#install)
  - [:rocket: Clone repository](#rocket-clone-repository)
  - [:warning: Requirement](#warning-requirement)
  - [:iphone: The Expo Client App](#iphone-the-expo-client-app)
  - [:strawberry: Raspi installation](#strawberry-raspi-installation)
    - [Enabling the Camera](#enabling-the-camera)
      - [Using the desktop](#using-the-desktop)
      - [Using the command line](#using-the-command-line)
    - [Controlling the pi remotely](#controlling-the-pi-remotely)
- [Quick Start](#quick-start)
  - [Back-End](#back-end)
  - [On your raspberry pi](#on-your-raspberry-pi)
  - [Front-End / Mobile App](#front-end--mobile-app)
- [Features](#features)
  - [Application](#application)
  - [Scarecrow connected](#scarecrow-connected)
- [Authors](#authors)

## Install

### :rocket: Clone repository
You have to clone the repo on the **Raspberry Pi** and your **computer**.

```shell
git clone git@github.com:PoCInnovation/Koic.git
```

### :warning: Requirement

- [Node](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker-compose](https://docs.docker.com/compose/install/)
- Have a Raspberry Pi and its camera module (PiCamera)

### :iphone: The Expo Client App

The Expo App will load the build bundle of the Expo CLI and allow you to test our app without deploying it or building with Android Studio.

Download links:
- [iOS](https://apps.apple.com/us/app/expo-client/id982107779)
- [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

### :strawberry: Raspi installation
#### Enabling the Camera
##### Using the desktop

If you are new to raspberry I advise you to follow this tutorial:  
- [Getting started with the Camera Module](https://projects.raspberrypi.org/en/projects/getting-started-with-picamera)

##### Using the command line

Open the `raspi-config` tool from the terminal:
```shell
sudo raspi-config
```
Select `Interfacing Options` then `Camera` and press `Enter`. Choose `Yes` then `Ok`. Go to `Finish` and you’ll be prompted to reboot.

#### Controlling the pi remotely

Your raspberry pi and your computer must be on the **same network**.

```diff
-Récupèrer l'address ip de la pi tu peux faire un script à lancer-
```

Get your ip address like this:
```shell
hostname -I | cut -d' ' -f1
```

On the terminal of your computer, look for the ip of your raspberry pi:
```shell
sudo nmap -sn <ip_address>.0/24
```

Once you have the address, establish the **ssh connection** with your raspberry pi:

```shell
ssh pi@<ip_address_raspberry_pi>
```

```diff
-Peut etre dire ce qu'il faut install sur la pi ?-
```

## Quick Start
### Back-End

On your computer, and at the `root` of this repo run these commands

```bash
# Run API
docker-compose -f Back-End/API/docker-compose.yml up -d
```

```bash
# Run IA old WORKER
python3 -m pip install -r Back-End/IA/requirements.txt
python3 Back-End/IA/worker.py
```

```bash
# Kafka Consumer
docker-compose -f Back-End/kafka-docker/docker-compose.yml up -d
```

### On your raspberry pi

Run the kafka producer like this:

```bash
# Kafka Producer
python3 RPIProducer/run.py
```

### Front-End / Mobile App

```bash
koic-app/npm install --global expo-cli
koic-app/yarn install
koic-app/yarn start
```

Scan the `QR code` displayed in your terminal with your phone

```bash
echo IP=<ip_adress> >> API/.env
echo IP=<ip_adress> >> koic-app/.env
API/ docker-compose up
pyhton3 API/migrations/setup.py
API/python3 app.py #turn in new terminal
koic-app/expo start #turn in new terminal
kafka-docker/docker-compose up #in the raspberry pi
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