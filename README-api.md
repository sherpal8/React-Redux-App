# Webpack and Babel configuration

This is a code along with Mr Corey House an expert on React Redux on Plural Sight. The purpose of this study is to understand what happens under the hood when `npx create-react-app` is called.

Also, it is to understand better as to the purpose of Webpack to minimise JS code. Also, the configuration of Webpack for the development environment. Later, the configuration of Webpack for the production environment will also be visited. Webpack is by the command `create-react-app`.

Here, a deeper understanding was obtained to understand how does Babel work and its uses in compiling modern JS so that it is compatible with the variety of Web Browsers in the world today. Also, the importance of Babel to compile JSX into JS. Also, a visit to the Babel website showed just how useful Babel is as it allowed a much more simplified use of JSX for app development, where Babel compiles JSX to a very complex JS code that is browser readable.

Also, the configuration of Babel was visited and this done in package.json.

ESLint configured in package.json and web.config.dev.js, so that webpack server will throw error when there is syntactic error. Also, ESLint extension installed in VSCODE to get in-code/ in-line warnings/errors when there is syntactic errors.

## Steps involved in completing this project:

Dev environment setup complete:

- Transpile: Babel
- Bundle: WebPack
- Lint: ESLint
- Web server: WebPack
- Generating index.html: WebPack
- Loading change on save: WebPack
- Testing as an important part of the code using Jest and Enzyme

All above done with one command with npm scripts i.e. `npm start`. Also, a basic React application was created, with relevant components. Redux was used for a better understanding of immutable state management.

## json-server

This api was used to create a mock api for more rapid local development. The server is accessed via port 3001 @ `locahost:3001`

## To run a build version:

To run this application, simply do this:

- fork the repository to your GitHub account
- then `git clone`
- cd into the folder called `React-Redux-App`
- once inside the folder, simply run `npm install`
- then, run this command: `npm run build`
- it takes a while to run build as a test is run first, then files compiled, and only then the App will run.

It has been configured set that the build version will run in your localhost on port 8080. Feel free to open `http://localhost:8080/` on your browser and explore the App and to interact with it.

## To run dev version:

Simply run `npm start`. Access App on browser via `localhost:3000`

## Finally:

Testing has been used in this project utilising Jest and Enzyme.
