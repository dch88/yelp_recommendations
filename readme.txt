# Yelp Final Project App
## Prerequisites
  + Node.js, and NPM
  + Git
## Installation
Fork [this repository](https://github.com/dch88/yelp_recommendations) on GitHub, then from your forked repo's homepage, click the green button to reveal its SSH address (e.g. `git@github.com:YOUR_USERNAME/yelp_recommendations`). Use the SSH address to clone, or download, your forked repo onto your local machine, perhaps onto the Desktop:
```sh
cd ~/Desktop
git clone git@github.com:YOUR_USERNAME/yelp_recommendations.git
```
Before running any of the commands below, navigate into this directory from the command-line:
```sh
cd my-first-nodejs-app
```
Install package dependencies:
```sh
npm install
```
> NOTE: this looks at the package dependencies defined in the "package.json" file and installs them locally into the "node_modules" directory.
## Setup
Obtain an Yelp API Key](https://www.yelp.com/developers/v3/manage_app) (i.e. `YELP_API_KEY`).
Create a new file called ".env" in the root directory of your local repo, and place inside the following contents, specifying your own values as applicable:
```sh
# this is the ".env" file...
YELP_API_KEY = "_____"
Client_ID = "_____"

```
## Usage
Run the web app:
```sh
# Mac Terminal:
DEBUG=myapp:* npm start
# Windows Command Prompt:
set DEBUG=myapp:* & npm start
```