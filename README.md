# Webpack FE starter using yarn  

## Usage:  
Install **yarn:** [Installation instructions](https://yarnpkg.com/en/docs/install)

### Install required modules

Navigate to project directory and run: ```yarn install```

### Commands:
* ```yarn run dev``` - Run webpack-dev-server for development mode
* ```yarn run build``` - Compile code once, and exit
* ```yarn run prod``` - Compile code in production mode, includes css and javascript master file minification

### Command simplification
If working on Linux or Mac, in order to simplify the commands, you can add an alias to your shell configuration file (.bashrc, .zshrc, etc). Navigate to home folder in the terminal, type ```nano .bashrc``` (or .zshrc).

At the end of the file, add ```alias dev='yarn run dev'```. Restart the terminal, and now you can type only ```dev``` in the project folder, to start the webpack dev server. If needed, create aliases for build and production commands as well.

**Note: Make sure you don't name your alias the same as some other system command, and that it does not conflict with other alias names.**
