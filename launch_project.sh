#!/bin/sh exit 0
    echo "\e[93m[start] server"
    /bin/sh -ec 'cd API/ && docker-compose up &'
    /bin/sh -ec 'cd API/ && flask run &'
    echo "\e[93m[start] application"
    # /bin/sh -ec 'cd koic-app/ && expo start &'
    # /bin/sh -ec 'cd koic-app/components/data && python3 get_data.py'
    # trap "echo '\e[93m [exit]'" 1
    # then
    # then
    #     cd API/
    #     docker kill koic_db
                # sudo pkill node
                # sudo pkill flask
    # fi    