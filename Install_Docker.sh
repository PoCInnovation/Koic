#!/bin/sh
sudo apt remove docker
sudo apt remove docker-client
sudo apt remove docker-client-latest
sudo apt remove docker-common
sudo apt remove docker-latest
sudo apt remove docker-latest-logrotate
sudo apt remove docker-logrotate
sudo apt remove docker-selinux
sudo apt remove docker-engine-selinux
sudo apt remove docker-engine


sudo apt -y install apt-plugins-core

sudo apt config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo

sudo apt install docker-ce docker-ce-cli containerd.io

# install de docker-compose

sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

sudo systemctl start docker

sudo systemctl enable docker
