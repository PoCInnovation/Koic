#!/bin/sh
    echo "[start] server \e[34mBlue"
    /bin/sh -ec 'cd API/ && docker-compose up &'
    /bin/sh -ec 'cd API/ && flask run &'
    echo "[start] application"
    /bin/sh -ec 'cd koic-app/ && expo start &'
    # /bin/sh -ec 'cd koic-app/components/data && python3 get_data.py'
    # if trap ctrl_c INT
    # then
    #     killall ./launch_project.sh
    #     echo '[closing] project'
    # fi