# simple-nodejs-proxy
This repository holds the sample code for the Twilio Blog post with the same name - https://www.twilio.com/blog/node-js-proxy-server.

Make sure to have node and yarn installed

- Install Xcode CLI tools
- Install nvm https://github.com/nvm-sh/nvm
  - Install these versions of node:
    - v14.17.0
    - v10.14.2
    - To switch the version ex: `nvm use v10.14.2`
- Install Yarn https://classic.yarnpkg.com/en/docs/install/#mac-stable

then run:

`yarn install`

`yarn start`

then, for the static file server:

`python3 -m http.server` from the root dir of the project

## Resources

https://github.com/chimurai/http-proxy-middleware#http-proxy-middleware-options