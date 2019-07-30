# Testapp

## Cloning a Git repository
1. From the repository, click + in the button Clon or download.

2. Copy the clone command.

3. From a terminal window, change to the local directory where you want to clone your repository.

4. Paste the command you copied from Github, for example:
`$ git clone https://github.com/rostyn4uk/testapp.git`

## Install packages
Go to the workspace folder (testapp) and use a command:
`npm install`

This command installs a package, and any packages that it depends on  in the local node_modules folder.
By default, npm install will install all modules listed as dependencies in package.json.

## Run the application
1. Go to the workspace folder (testapp).

2. Launch the server by using the CLI command ng serve, with the --open option:
`ng serve --open`
The ng serve command launches the server, watches your files, and rebuilds the app as you make changes to those files.
