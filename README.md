# **Loopring staking & claiming Dapp**
## **About**
This is a production ready architecture, using  the following technologies:
- **serve**: Small production webserver.
- **material-ui**: React components for faster and easier web development.
- **animate.css**: CSS basic animation.
- **eslint**: Code quality.
- **node-sass**: Node.js bindings to libsass. 
- **react**: Last version of React.
- **react-router-dom**: DOM binding for react-router .
- **react-scripts**: Create React apps with no build configuration. 
- **redux**: A predictable state container for JavaScript apps.
- **redux-persist**: Persist and rehydrate a redux store.
- **redux-saga**: A library that aims to make application side effects easier to manage.
- **web3-react**: A simple, maximally extensible, dependency minimized framework for building modern Ethereum dApps

## **Installation**
`npm install`
## **Development**
`npm run start:dev`
## **Production**
```
npm run build
npm run start
```
## **Test**
Check code quality with eslint `npm run test:eslint`

## **Architecture summary**
- **/public** - index.html and favicon
- **/src**
    - **/assets** - Style and images
    - **/components** - Contains all components that can be used in different containers or applications
    - **/constants** - All constants
    - **/containers** - Contains all the "smart" components(often close to the notion of page)
    - **/redux**
        - **/config** - Configuration of store persistence, middleware ...
        - **/features** - Your reducer, action and side effect separate by smart contract you interact
    - **/theme** - Material-UI theme
    - **/translations** - Translation with key = english version and value translated version
    - **/utils**
