#!/usr/bin/env node

const fs = require('fs');

const {execSync} = require('child_process');

const runCommand = command => {
    try {
        execSync(`${command}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/twinklecube/create-react-app.git ${repoName}/temp`;
const packageName = repoName !== '.'? repoName : 'react-app'

const installDepsCommand = `cd ${repoName} && npm install`;
const setupNameCommand = `cd ${repoName} && npm pkg set name=${packageName}`;
const setupAuthorCommand = `cd ${repoName} && npm pkg set author=''`;
const setupVersionCommand = `cd ${repoName} && npm pkg set version=1.0.0`;
const deleteBinCommand = `cd ${repoName} && npm pkg delete bin`;
const deleteRepositoryCommand = `cd ${repoName} && npm pkg delete repository`;
const deleteKeywordsCommand = `cd ${repoName} && npm pkg delete keywords`;
const deleteBugsCommand = `cd ${repoName} && npm pkg delete bugs`;
const deleteHomepageCommand = `cd ${repoName} && npm pkg delete homepage`;


console.log(`\nCreating a new react app...`);

console.log(`\nCloning the repository...\n`);
const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(-1);

if(fs.existsSync(`./${repoName}/temp/.git`)) {
    fs.rmSync(`./${repoName}/temp/.git`, {recursive: true, force: true})
};
if(fs.existsSync(`./${repoName}/temp/dist`)) {
    fs.rmSync(`./${repoName}/temp/dist`, {recursive: true, force: true})
};
if(fs.existsSync(`./${repoName}/temp/.gitignore`)) {
    fs.rmSync(`./${repoName}/temp/.gitignore`)
};
fs.cpSync(`./${repoName}/temp`, `./${repoName}`, {recursive: true});
fs.rmSync(`./${repoName}/temp/`, {recursive: true, force: true});

console.log(`\nSetting up the project...`);
runCommand(setupNameCommand);
runCommand(setupVersionCommand);
runCommand(setupAuthorCommand);
runCommand(deleteBinCommand);
runCommand(deleteHomepageCommand);
runCommand(deleteKeywordsCommand);
runCommand(deleteBugsCommand);
runCommand(deleteRepositoryCommand);

console.log(`\nInstalling dependencies...\n`);
const installedDeps = runCommand(installDepsCommand);
if(!installedDeps) process.exit(-1);

fs.rmSync(`./${repoName}/bin`, {recursive: true, force: true});

console.log("\nHappy hacking!!!\n");
console.log("you may start by typing the following\n");
const startScript = repoName !== '.'? `cd ${repoName} && npm start\n` : 'npm start\n';
console.log(startScript);