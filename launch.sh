#!/usr/bin/env bash

FILES=("Back-End/docker-compose.yml"
       "Back-End/API/routes/stream.py"
       "RPIProducer/manager.py"
       "koic-app/.env")

REPLACE=`hostname -I | cut -d' ' -f1`
FIND='REPLACE_BY_YOUR_IP'

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color
printf "${GREEN}Your IP is${NC} ${REPLACE}\n"

for Item in ${FILES[*]} ;
  do
    sed -i "s/$FIND/$REPLACE/" "$Item"
  done

printf "${GREEN}[ DONE ]${NC} Replace Ip in files\n"

docker-compose --file Back-End/docker-compose.yml up --build -d

printf "${GREEN}[ DONE ]${NC} Docker are up\n"

if python3 -c "import psycopg2" &> /dev/null; then
    echo 'all good'
else
    python3 -m pip install psycopg2-binary
fi

sleep 2

if ./Back-End/API/migrations/setup.py &> /dev/null; then
  printf "${GREEN}[ DONE ]${NC} Create table in DB\n"
else
  printf "${RED}[ CRASH ]${NC} Create table in DB\n"  
fi

printf "\n${YELLOW}NEXT STEP${NC}\n"
printf "1. Create kafka cluster\n"
printf "2. Run kafka producer (raspi or fake_producer)\n"
printf "3. Run IA\n"
printf "4. Run Mobile-App\n"