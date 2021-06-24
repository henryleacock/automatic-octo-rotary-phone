1) Open a terminal window and run to install NVM:  
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`  
(MacOS) If you haven't installed command line developer tools, you'll see a prompt that says:  
"The 'git' command requires the command line developer tools. Would you like to install the tools now?"  
If so, click Install button

2) If you get another prompt in the terminal about bash not being setup, run:  
`touch ~/.bash_profile`  
Then I ran this again:  
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`

3) Install this version for FE proxy server: `nvm install 14.17.0`

4) Install this version for Sitecore Storefront project: `nvm install 10.14.2`

5) Switch to this node version to install yarn: `nvm use 14.17.0`

7) Install yarn: `npm install --global yarn`

8) Create "Code" directory under Home:  
`cd ~`  
`mkdir Code`

9) Go here in browser:  
https://caleres.visualstudio.com/Legacy_Frontend/_git/Frontend-Proxy-Server?version=GBmain

10) Hit Clone button and copy command line input value and paste in Terminal in the "Code" directory:  
`git clone https://caleres.visualstudio.com/DefaultCollection/Legacy_Frontend/_git/Frontend-Proxy-Server`

11) Click "Generate Credentials" button on browser if prompted in terminal for username/password and copy/paste at prompts

12) Run yarn install in the "Frontend-Proxy-Server" directory 

14) Run yarn help to confirm install, and yarn start to start proxy server