# Background

[NIST](https://www.nist.gov/) recently updates their [Digital Identity Guidelines](https://pages.nist.gov/800-63-3/) in June 2017.
The new guidelines specify general rules for handling the security of user supplied passwords.
Previously passwords were suggested to have certain composition rules (special characters, numbers, etc), hints and expiration times.
Those have gone out the window and the new suggestions are as follows:

Passwords MUST

1. Have an 8 character minimum
2. AT LEAST 64 character maximum
2. Allow all ASCII characters and spaces (unicode optional)
4. Not be a common password

## Requirements

* Validate a input password is between 8-64 characters, is only ASCII characters, and not in the common passwords collection.
* Users should be able to check passwords multiple times and the page should remain responsive.
* DO NOT export the user supplied password in any form.
* DO NOT edit the server, but you can add developer tools if it's helpful. Adding hot-reloading for dev work for example.
* DO NOT make HTTP requests for data othan than from the supplied server

Feel free to use any tooling/libraries you'd like, but focus on meeting the functional requirments. This project will not be evaluated on the aesthetics or UI outside of meeting the requirments.

Treat this project as if it was an open source utility that you were going to distribute. Things like writing tests, a README with what it does, how to use it and how to build it locally.

## Running the local server

### System Requirments

* node v8.10.0+
* npm v5.0.0+

### Run

```
npm install
node server.js // bootup server
```

Server will be available at http://localhost:3000/ and the ./app directory will be mounted to '/'.

### Testing

```
npm test
```
