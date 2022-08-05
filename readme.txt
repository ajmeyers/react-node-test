# Source 
https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/


# General

Remember to start the server before running the frontend!

package.json - keeps track of app scripts and manage dependencies our Node app needs
-"proxy" property - allows us to make requests to our Node server without having to provide the origin it is running on (3001) every time
index.js - JavaScript file where our server will run
needed to update to Node 14 with this "nvm install 14"

# React

We can use "useEffect" to make a HTTP request in App.js
"data" is a state variable used to hold our data, the current state of the data

What are "useState" and "useEffect" and how to we use them for HTTP requests?
--both are found using "React" import

Parameters req and res:
req - object containing info about the HTTP request
res - used to send back the desired HTTP response


# Express

Simple web server
"npm i express" - command to install Express as dependency in order to use it
"npm start" - will run our server

# API Endpoint

Want to use Node/Express as an API
-Will give our React app data
-Perform an operation on the data
-Perform an operation only the server can do

"res" - short for response