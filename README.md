# Team Profile Generator

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

## Purpose
Generate a webpage that displays my team's basic info to have quick access to their emails and GitHub profiles

## Table of Contents
- [Purpose](#purpose) 
- [Description](#description) 
- [Installation Instructions](#installation-instructions)
- [Process](#process)
- [Path to Dist folder](#path-to-dist-folder)
- [Demo Video Link](#demo-video-link)
- [Demo Preview](#demo-preview)
- [Github Repository](#github-repository)
- [Built With](#built-with)
- [License](#license)


## Description
AS A manager,
I WANT to generate a webpage that displays my team's basic info,
SO THAT I have quick access to their emails and GitHub profiles.

## Installation Instructions  
Go to the github repo provided below and download the code. Make sure to run 'npm install' before running node. When you run 'node index' in the terminal, you will be the Manager and filling out info for yourself then presented with a menu where you select employee types to add to the team profile. When you select done, an index.html will be generated in the dist folder.

## Process
I set up the repo, set up the directories, and added the files. I set set up tests for each class, then set up the actual classes in the lib folder. The actual classes utilize super and extends to build off the main employee class. Once all the tests passed, I got started on the generateHTML file that generates the index.html and lands in the dist folder. Lastly I worked on the template file houses the base html and for loop that adds the employee cards from the prompt data. Once the cards were working, I styeled using materialize css kit. 

## Path to Dist folder
https://github.com/macykcool/team-profile-gen/tree/main/dist

## Demo Video
https://drive.google.com/file/d/1R5sL6MJo1iIQ2ngTUhOBYcia4lwQmTHD/view

## Demo Preview
![team profile generator demo](./gif/profiledemo.gif)

## Github Repository
https://github.com/macykcool/team-profile-gen

## Built With
- Materialize for CSS
- Javascript
- HTML
- NPM
- Jest
- Inquierer
- File System
- Screencastify

## License
- Mozilla
- https://opensource.org/licenses/MPL-2.0

## Made with ❤️️ by Macy Mannix
Mentored by UC Davis Full Stack Web Developer Bootcamp
