#!/usr/bin/env bash

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

if [[ $1 == "" ]] #Where "$1" is the positional argument you want to validate 

 then
 echo "Please enter your Raspi-IP"
 exit 0

fi

scp RPIProducer/manager.py RPIProducer/run.py pi@$1:Downloads/

printf "${GREEN}[ DONE ]${NC} Programm are copy in Downloads on raspberry\n"  