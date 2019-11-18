#!/bin/bash
sudo npm install
ng build --prod
if [ $(docker container ls -q --filter name=my_app_front_c) != '' ];then
sudo docker container stop my_app_front_c
sudo docker container rm my_app_front_c

fi
if [ $(docker image ls -q --filter reference=my_app_front_c) != '' ];then
sudo docker image rm my_app_front

fi
sudo docker build -t my_app_front .
sudo docker run -itd -p 9090:80 --name my_app_front_c my_app_front