# REST-API_CSV_PARSER
An express/node js app



> ### Example Node (Express + Mongoose) codebase containing real world examples (CRUD, auth)

<a href="https://thinkster.io/tutorials/node-json-api" target="_blank"><img width="454" src="https://raw.githubusercontent.com/gothinkster/realworld/master/media/learn-btn-hr.png" /></a>

This repo is functionality complete — PRs and issues welcome!

# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Install MongoDB Community Edition ([instructions](https://docs.mongodb.com/manual/installation/#tutorials)) and run it by executing `mongod`
- `npm start` to start the local server


# Code Overview

## Dependencies

- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript 
- [formidable](https://www.npmjs.com/package/formidable)- A node.js module for parsing form data, especially file uploads
- [nodemon](https://www.npmjs.com/package/nodemon)-  Simple monitor script for use during development of a node.js app.
- [dotenv](https://www.npmjs.com/package/dotenv)- Loads environment variables from .env file

## Application Structure

- `index.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `controller/` - defination of all the routes
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.


## Authentication

Requests are authenticated using the `Authorization` header with a valid token "allow"/"deny". We define a express middlewares in `controller/Crud.js` that can be used to authenticate requests. The `required` middleware configures router and check the basic token and will return a 401 status code if the request cannot be authenticated.


<br />

