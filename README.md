# Skeleton React Native

This repository contains a React Native App skeleton powered by React Native.

This repo has been built and tested using the following software and associated
versions, please ensure you meet the minimum version shown below for each in
order for this repo to run correctly.

![react native v0.45.1+](https://img.shields.io/badge/react_native-v0.45.1%2B-brightgreen.svg) ![react native cli v2.0.1+](https://img.shields.io/badge/react_native_cli-v2.0.1%2B-brightgreen.svg) ![node v8.1.3+](https://img.shields.io/badge/node-v8.1.3%2B-brightgreen.svg) ![npm v5.0.4+](https://img.shields.io/badge/npm-v5.0.4%2B-brightgreen.svg) ![homebrew v1.2.4+](https://img.shields.io/badge/homebrew-v1.2.4%2B-brightgreen.svg) ![watchman v4.7.0+](https://img.shields.io/badge/watchman-v4.7.0%2B-brightgreen.svg)


## Prerequisites

Before you clone this repository, please ensure the following 5 packages have been installed
<b>(first-time setup only)</b>. Please also ensure that you have node/NPM installed.
We are also using NPM to manage our project dependencies.

### Environment Setup

#### 1. Install XCode

Download it from Apple Store

#### 2. Install HomeBrew

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`<br>
Mac OSX dependencies management program used here to install node

#### 3. Install Node/NPM

`brew install node`  
or  `brew upgrade node` (if already installed)<br>
Node runs Javascript outside of the browser.<br>
NPM is used for installing dependencies.<br>
Node and NPM come together, they are installed at the same time.

#### 4. Install Watchman

`brew install watchman`<br>
Watch filers on the hard drive and waits for them to change

#### 5. Install React Native CLI<br>
`npm install -g react-native-cli`<br>
Used to generate new React Native projects

## Clone the repository

Clone the repo with the git clone command.<br>
`git clone git@github.com:FDarnese/react-native-skeleton.git`<br>

cd into the project folder<br>
`cd react-native-skeleton`

## Install NPM

Run `npm install`

## Build and run the project

To build and run the project, run the following command:
- Option 1.<br>
`react-native run-ios`<br>
This should launch the Simulator, and you should see the boilerplate screen.

- Option 2.<br>
Start the app from the Xcode IDE

## Open the project folder in your favorite editor

e.g. If you are using atom:<br>
`atom react-native-skeleton`


## Setup ES6+Babel+JSX Linting with Atom (Optional)

This sets up Atom to properly lint ES6+Babel+JSX using Airbnb's .eslintrc as a starting point.

1. In Atom install <b>lint & es-lint</b> packages

2. Install <b>eslint-config-airbnb babel-eslint eslint-plugin-react</b> which are files that contains a set of rules we are going to use during our project

From your project root run:<br>
`npm install --save-dev eslint-config-airbnb babel-eslint eslint-plugin-react`


3. Make sure ESLint knows to use the rule set-up/bundle we have just installed via NPM
Inside of the project directory create a new file called <b>.eslintrc</b>

4. Add the following code to the .eslintrc file
```TXT
  {
    "extends": "eslint-config-airbnb"
  }
```

<b>Note:</b> See <a href="https://github.com/airbnb/javascript" target="blank">Airbnb's Javascript styleguide</a> and the <a href="http://eslint.org/docs/user-guide/configuring#extending-configuration-files" target="blank">ESlint config docs for more information</a>.
