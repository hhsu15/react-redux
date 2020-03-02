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
** For some reaso sometimes you have to create a second one and it will work.


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
const auth = gapi.auth2.getAuthInstance()

```

