# Hackaton_jjoo22_f1_backend

## About The Project

This is one of the qualifying challenges that are part of the JOBarcelona '22 online hackathon, it's a backend project creating an api for client requests, it allows to authenticate with token and see the list of users only if you are admin.

I have used MongoDB to deploy the database in the cloud and Mongoose to make the connection, I use express and nodemon to prepare the requests, which will be documented in a postman file.

Translated with www.DeepL.com/Translator (free version)

* You will see that the file .env its not in .gitignore, because there is no sensitive information in the database but I know that normally the .env file has to be in gitignore also in config file [src/config/config] I check if the .env exists, if it doesn't use the specified URL.


<p align="center"> LIST OF TASKS DEMANDED</p>

DONE ✅ To be connected to port: 3030.

DONE ✅ Environment variables should not be uploaded to github, but there must be a template that allows you to know which ones are needed..

DONE ✅ The auth paths must allow users to register and log in:

  * A path for registration /signup

  * A path for login /login

DONE ✅ Both the login path and the registration path must send the token in order to enter the other paths.

DONE ✅ In addition, a path is needed to return all the list of users so that the JOBX backoffice can control the growth. This path has to be protected and access will only be given to a user with admin role and with the credentials that are encrypted in the document.

  * route: /users

EXTRA ✅ A user has the following mandatory parameters

  * username (must be unique)

  * email (must follow the email pattern and be unique)

  * password (must be at least 8 characters long, include a capital letter and a number).

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

First, you will need to do a npm install.

Once started you have to open the terminal and you can start.

There are two databases one control the main database with the command (npm run dev) and the other is for testing purpose only (npm run test) and if you want to see the test Database you can do (npm run dbTest).

NOTE: The test database have the same information that the (mwc) have.

* Dev command: npm run dev
* Test command: npm run test (0 functions test, only oprepared configuration for a tests)

Installation
Clone the repository: https://github.com/sergiogt93/Hackaton_jjoo22_f1_backend.git, next install NPM packages

<p align="right">(<a href="#top">back to top</a>)</p>

## Routes availables

The available paths are in the postman folder, where there is the whole collection with a json file to import it.

<p align="right">(<a href="#top">back to top</a>)</p>


## Contact
https://www.linkedin.com/in/sergio-bermudez-rodriguez/