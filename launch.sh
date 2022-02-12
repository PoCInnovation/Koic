#!/usr/bin/env bash

LOCAL_IP=`hostname -I | cut -d' ' -f1`

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color


printf "${GREEN}Your IP is${NC} ${LOCAL_IP}\n"

export IP=${LOCAL_IP}

printf "${GREEN}[ DONE ]${NC} export IP\n"

docker-compose --file Back-End/docker-compose.yml up --build -d

printf "${GREEN}[ DONE ]${NC} Docker are up\n"

if python3 -c "import psycopg2" &> /dev/null; then
    echo 'all good'
else
    python3 -m pip install psycopg2-binary
fi

sleep 2

if docker-compose --file Back-End/docker-compose.yml run api migrations/setup.py  &> /dev/null; then
  printf "${GREEN}[ DONE ]${NC} Create table in DB\n"
else
  printf "${RED}[ CRASH ]${NC} Create table in DB\n"  
fi

python3 -mwebbrowser http://localhost:9000/addCluster

printf "\n${YELLOW}NEXT STEP${NC}\n"
printf "1. Create kafka cluster\n"
printf "2. Run kafka producer (raspi or fake_producer)\n"
printf "3. Run IA\n"
printf "4. Run Mobile-App\n"