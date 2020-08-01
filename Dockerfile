FROM node:14.7.0-alpine3.12

RUN apk add bash
# Create app directory
WORKDIR /usr/src/app

RUN mkdir $HOME/.ssh
RUN touch $HOME/.bashrc

RUN echo "alias ll='ls -alF'" >> $HOME/.bashrc
RUN echo "alias la='ls -A'" >> $HOME/.bashrc
RUN echo "alias l='ls -CF'" >> $HOME/.bashrc
RUN echo "alias q='exit'" >> $HOME/.bashrc
RUN echo "alias c='clear'" >> $HOME/.bashrc


# RUN apt-get update -y && apt-get -y install curl zip python build-essential git ca-certificates python-pip
# RUN pip install awscli --upgrade --user

## RUN apt-get -y install nodejs && npm i npm@latest -g

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
# COPY deploy.sh ./
# COPY install-node.sh ./
# COPY node-v12.14.0-linux-x64.tar.gz ./

# RUN ./install-node.sh
RUN npm i npm@latest -g
RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# CMD [ "npm", "start" ]

CMD [ "/bin/bash" ]