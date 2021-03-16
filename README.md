# Search for Images (Pics) App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project comprises a basic search bar that retrieves images from [Unsplash's Search Photos API](https://unsplash.com/documentation#search-photos) and displays the list of image results in a CSS Grid that has custom sizing for each image based on each image's height.  In addition to the custom CSS grid image styling, we also leverage [Semantic UI's](https://semantic-ui.com/) free stylesheet for styling our search bar  (stylesheet href link included in index.html).  We leverage Semantic UI styling so as to ensure the project's main focus is primarily on practicing React JS concepts.

This project is part of practice exercises for Stephen Grider's Udemy course, [Modern React with Redux](https://www.udemy.com/course/react-redux/).  The project helps practice using core React JS concepts including the following:  
1) Building Content with JSX
2) Communicating with Props
3) Structuring Apps with Class-Based Components
4) State in React Component
5) Understanding Lifecycle Methods
6) Handling User Input with Forms and Events
7) Making API Requests with React
8) Building Lists of Records
9) Using Ref's for DOM Access

## Result - Demo
![Search Pics App](pics-demo-cars.gif)


## Setting up the APIs
### Step 1: Sign-up for developer API keys
This project uses the [Unsplash's Search Photos API](https://unsplash.com/documentation#search-photos).  To use Unsplash's API, you can sign up for a free Unsplash API key [here](https://unsplash.com/developers).

### Step 2: Environment Variables
As per best practice, we configure our .gitignore file in order to declare Unsplash's API key and ensure it remains private as opposed to publicly visible when pushing to GitHub.  This process is as follows:

- [ ] Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your REACT API keys like this: (The name of the variable needs to begin with REACT_APP_)
```
REACT_APP_UNSPLASH_KEY=**************************
```
- [ ] Add this code to the very top of your .js file for handling Unsplash API functionality (for example, in ./src/api/unsplash.js file):
```
const dotenv = require('dotenv');
dotenv.config();
```
- [ ] Reference variables you created in the .env file by putting ```process.env``` in front of it, an example might look like this:
```
console.log(`Your API key is ${process.env.REACT_APP_UNSPLASH_KEY}`);
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
