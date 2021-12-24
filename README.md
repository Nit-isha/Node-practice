# NODE

[https://nodejs.org/en/docs/](https://nodejs.org/en/docs/)
- GLOBALS - NO window

- __dirname - path to current directory
- __filename - file name
- require - function to use modules (Common JS)
- module - info about current module (file)
  
    - [https://nodejs.org/api/modules.html](https://nodejs.org/api/modules.html)
    - OS,
    - PATH, 
    - FS(File System), 
    - HTTP
- process - info about env where the program is being executed.

---

## NPM
[https://www.npmjs.com/](https://www.npmjs.com/)
- npm - global command, comes with node
- Run `npm --version` .

- Local dependency - use it in any object
- Run `npm i 'packageName'` to install any package.
- Run `npm i 'packagename' -D OR --save-d` to install as dev dependencies.

- Global dependency - use it in any project
- RUn `npm install -g 'packageName'`.

---
## package.json

- `package.json` - manifest files(stores imp info about project).
- Manual approach ( create package.json in the root, create properties)
  - npm init (step-by-step)
  - npm init -y (everything default)
    - e.g. package lodash `npm i lodash in terminal`.
    - Run npm install after cloning the projects and it will install all dependencies.

- To uninstall run `npm uninstall 'packagename'`.

---

## Events
- Event-driven programming
- Used heavily in Node.js
- on - listen for an event
- emit - emit an event
- possible in server side
- listen for specific events and register functions that will execute in response for those events.
- Once events takes place callback func fires.
- 