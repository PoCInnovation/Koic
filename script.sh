#!/usr/bin/env bash

FILES=("Back-End/docker-compose.yml"
       "Back-End/API/routes/stream.py"
       "RPIProducer/manager.py"
       "koic-app/.env")

REPLACE=`hostname -I | cut -d' ' -f1`
FIND='REPLACE_BY_YOUR_IP'

GREEN='\033[0;32m'
NC='\033[0m' # No Color
printf "${GREEN}Your IP is${NC} ${REPLACE}\n"

for Item in ${FILES[*]} ;
  do
    sed -i "s/$FIND/$REPLACE/" "$Item"
  done