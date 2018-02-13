# Webpack FE starter using yarn  

## Usage  
Install webpack cli globally on your machine ```npm install -g webpack``` (on Linux, may require ```sudo```)  
Install **yarn:** [Installation instructions](https://yarnpkg.com/en/docs/install)  

## Development setup:
* Clone the repository ```git clone <repo url>```
* Navigate to project directory and run ```yarn install``` to install required modules

## Project setup:
* Define design specific dimensions variables at **src/scss/variables/_v--dimensions.scss**
* Adjust variables and mixins to meet the design specifics; for example, if there is no design for tablet, delete the additional argument called in ```font-size-vw()``` in **src/scss/variables/_v--typography.scss** (also delete the additional argument from ```font-size-vw()``` mixin in **src/scss/mixins/_m--font-size.scss**), and delete tablet entries from the font-size and line-height mixins
* Define fonts and font variables in **src/scss/variables/_v--typography.scss**
* Adjust base wrappers in **src/scss/layouts/_wrappers.scss**
* Code away

### Assets folders:
**Put assets here:**
* Fonts: **html/_common/fonts/**
* Images: **html/_common/images/**

### Compilation paths:
* CSS (styles.css) is compiled to: **html/css/**
* Javascript (main.js) is compiled to: **html/_common/javascript/webedia/**

### Commands:
* ```yarn run dev-local``` - Runs webpack-dev-server for development mode, use when working on local static project
* ```yarn run dev-live``` - Runs webpack in watch mode, use when working on the development server in vagrant
* ```yarn run build``` - Bundle code once, and exit
* ```yarn run prod``` - Bundle code for production, includes css and javascript minification

### Command simplification:
If working on Linux or Mac, in order to simplify the commands, you can add an alias to your shell configuration file (.bashrc, .zshrc, etc). Navigate to home folder in the terminal, type ```nano .bashrc``` (or .zshrc).

At the end of the file, add ```alias dev-local='yarn run dev-local'```. Restart the terminal, and now you can type only ```dev``` in the project folder, to start the webpack dev server. If needed, create aliases for other commands as well.

**Note: Make sure you don't name your alias the same as some other system command, and that it does not conflict with other alias names.**
