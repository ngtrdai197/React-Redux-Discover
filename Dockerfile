FROM ubuntu:18.04

USER root

WORKDIR /home/discover-react-app

RUN apt-get update -y
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_10.x  | bash -
RUN apt-get -y install nodejs

RUN node -v
RUN npm -v

COPY ./package.json /home/discover-react-app/package.json
RUN npm install

COPY . /home/discover-react-app

ENV PORT=3000
EXPOSE $PORT

CMD npm run start