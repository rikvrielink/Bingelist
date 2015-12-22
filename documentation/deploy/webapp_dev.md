# Deployment Webapp
### Development version


## Requirements
 - NodeJS / NPM
 - Bower
 - Grunt

##Installation
Checkout the BingeList repository from Git:
```
git@github.com:rikvrielink/Bingelist.git
```
For developing this project or adding new features, switch to the `develop` branch
```
git checkout develop
```
Run NPM and Bower to get the latest version of the dependencies
```
npm install && bower install
```
Install Grunt-cli globally to run grunt tasks
```
npm install grunt-cli -g
```
Run the development task for javascript hinting, injecting and creating a webserver
```
grunt develop
```
