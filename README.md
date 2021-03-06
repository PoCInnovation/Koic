<h1 align=center>
Koic
</h1>

## Desciption

Koic is a **connected scarecrow** which is equipped with cameras that film the terrain in real time.  
The filmed images are then analysed. Depending on the animal that is hit, the scarecrow will choose a suitable way **to repel it in a natural way.**

<p align="center">
  <img src=".github/dimages/../images/Koic-stream.png" width="25%" />
  <img src=".github/demo.gif" width="30%" /> 
  <img src=".github/dimages/../images/Koic-activity.png" width="25%" /> 
</p>

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
- [Detailed launch](#detailed-launch)
  - [Back-End / Consumer Kafka](#back-end--consumer-kafka)
  - [Producer Kafka](#producer-kafka)
  - [Front-End / Mobile App](#front-end--mobile-app)
- [Features](#features)
  - [Application](#application)
  - [Scarecrow connected](#scarecrow-connected)
- [Explain](#explain)
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
Select `Interfacing Options` then `Camera` and press `Enter`. Choose `Yes` then `Ok`. Go to `Finish` and you???ll be prompted to reboot.

#### Controlling the pi remotely

Your raspberry pi and your computer must be on the **same network**.

Get your ip address like this:
```shell
hostname -I | cut -d' ' -f1
```

Once you have the address, establish the **ssh connection** with your raspberry pi:

```shell
ssh pi@<ip_address_raspberry_pi>
```

## Quick Start

1. Run launch programm `./launch.sh`
2. Create Kafka Cluster on http://localhost:9000/addCluster
3. Run Kafka Producer (raspberry pi or on your computer)
5. Run Mobile-App

## Detailed launch
### Back-End / Consumer Kafka

:warning: Change variable `REPLACE_BY_YOUR_IP` by your computer address ip in:
- **koic-app/.env**
- **RPIProducer/manager.py**

```
./launch.sh
```

Create kafka cluster on your http://localhost:9000/addCluster
<details>
    <summary>Like this:</summary>

![](.github/images/kafka_manager.png)

</details>
And save.  


### Producer Kafka

Check that the above steps have been carried out.  
If you would test without pi run his command:
```bash
./RPIProducer/tests/fake_producer.py
```

Run the kafka producer on raspberry pi:  
Put the script on raspberry pi with this command:  
```bash
./rpi.sh {ip_of_your_raspi}
```

The programm was copied in `Dowloads` folder
```bash
# Kafka Producer / on rasberry pi
python3 run.py
```

### Front-End / Mobile App

In **koic-app/.env** change ip by your ip address.  

```bash
cd koic-app/
npm install --global expo-cli
yarn install
yarn start
```

Scan the `QR code` displayed in your terminal with your phone

## Features

### Application

The application is divided by a tab that allows you to navigate between the different features like :

-  Be able to view the activity on the field in real time thanks to the cameras placed on it.
- View and graph the data collected and analyse the behaviour of the pests.

- Make adjustments to the entire application and the cameras.

- Report a problem and able to contact support.

### Scarecrow connected

- Cameras that can film the field in real time and send information that is processed by an API and sent to the application 

## Explain

1. [Architecture Scheme](Documentation/ArchitectureScheme.md)
2. [Back End custom](Documentation/BackEnd.md)

## Authors

| [<img src="https://github.com/pr0m3th3usEx.png?size=85" width=85><br><sub>Thomas Michel</sub>](https://github.com/pr0m3th3usEx) | [<img src="https://github.com/Happinesseuh.png?size=85" width=85><br><sub>In??s Maaroufi</sub>](https://github.com/Happinesseuh) | [<img src="https://github.com/Cleopha.png?size=85" width=85><br><sub>Coline Seguret</sub>](https://github.com/Cleopha)
| :---: | :---: | :---: |
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

> :rocket: Don't hesitate to follow us on our different networks, and put a star ???? on `PoC's` repositories.