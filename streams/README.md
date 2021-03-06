# Stream

This application will have the following challenges:

- need to navigate around separate pages in our app
- need to allow user to login
- need to handle forms in redux
- need to master CRUD (create, read, update, destroy) operation
- error handling

## Introduce React Router

See code or master README

## OAuth Authentication

User authenticates with outside service provider such as Google, Facebook.

- User authorizes our app to access their info
- Outside provider tells us about the user
- we trust the outside provider to correctly handle identification of a use
- Oauth can be used for:
  - user identification
  - our app making actions on behalf of user

For this app, we are using Google Oauth. You can find a list of all the scops (such as access user profile, email..)

```
https://developers.google.com/identity/protocols/googlescopes/
```

## Set up

Create a new project at console.developers.google.com

Set up Oauth confirmation screen

- Go into the new project created and go to "Credentials"
- Go to Oauth consent screen and enter the application name

Generate Oauth Client ID

- then click on Create Credentials
- Oauth Client ID
- type of application -> Web app
- Authorize javascript origin -> http://localhost:3000
- copy the client id
  \*\* For some reaso sometimes you have to create a second one and it will work.

Install Google API library

- there is currently no npm package
- add this to the public/index.html

```
<script src="https://apis.google.com/js/api.js"></script>
```

Make sure the lib gets called any time the user clicks on the 'Login with Google' button

### GAPI documentation

search for gapi documentation to find more info about gapi. For example:

- gapi.auth2.getAuthInstance
- try this in the console:

```javascript
const auth = gapi.auth2.getAuthInstance();
```

## JSON Server

Refer to `api` folder. Essentially we have a file `db.json` to act like a database. We then use the command `json-server -p 3001 -w db.json` to watch any changes made to `db.json`. The purpose here is we are using it as database and we make an API request for (get, post, put, delete) to localhost:3001 to perform those operations.

### Installation

```
npm install --save json-server
```

## Streaming Vedios

To stream vedios on your app. Here is a series of things:

- you need to start RTMP server
- you need to download a software called OBS Studio

### RTMP server

RTMP server to stream your vedio.

#### Installation

Search for Node-Media-Server for github repo.

```
npm install --save node-media-server
```

### OBS

Go to `obsproject.com` and download the software for mac. This is for you to record a vedio

### flv for streaming

#### Installation

npmjs.com/package/flv.js

```
npm install flv.js
```

Refer to `StreamShow.js`
