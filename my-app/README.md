# Getting Started

### In the terminal do:
<code>cd my-app</code>

<code>nvm install 16 && nvm use 16</code>

<code>npm install</code>

### You can then run the project with the command
<code>npm start</code>

### Items to be aware of
Inside the folder named src you will find a file named posts.json. This file will not be used until a challenge later in the content.  

For convenience react comes installed in this template. A package named axios has also been installed as it will be required in a challenge later.

### To resolve `Error: digital envelope routines::unsupported` (https://stackoverflow.com/questions/69665222/node-js-17-0-1-gatsby-error-digital-envelope-routinesunsupported-err-os)

Add these scripts in the package.json file.
```
"scripts": {
    "start": "export SET NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
    "build": "export SET NODE_OPTIONS=--openssl-legacy-provider && react-scripts build"
}```