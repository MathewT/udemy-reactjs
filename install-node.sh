VERSION=v12.14.0
DISTRO=linux-x64
mkdir /usr/local/lib/nodejs
tar -xzvf node-$VERSION-$DISTRO.tar.gz -C /usr/local/lib/nodejs 
mv /usr/local/lib/nodejs/node-$VERSION-$DISTRO /usr/local/lib/nodejs/node-$VERSION

echo 'export NODEJS_HOME=/usr/local/lib/nodejs/node-v12.14.0/bin' >>  ~/.profile
echo 'export PATH=$NODEJS_HOME:$PATH' >> ~/.profile

echo 'export NODEJS_HOME=/usr/local/lib/nodejs/node-v12.14.0/bin' >>  ~/.bashrc
echo 'export PATH=$NODEJS_HOME:$PATH' >> ~/.bashrc

pip install awscli --upgrade --user

export NODEJS_HOME=/usr/local/lib/nodejs/node-v12.14.0/bin
export PATH=$NODEJS_HOME:$PATH

npm i npm@latest -g

npm install
