let message = []; //Array that holds errorMessages
const errorMessages = document.getElementById("errorMessage"); //div that holds login error messages
const form = document.getElementById("loginForm"); //form that holds the logins
const username = document.getElementById("username"); //inputted username
const password = document.getElementById("password"); //inputted password

/**
 * if the login was successful it takes you to mypages
 */
function Success() {
  //TODO: connect to java side (were it checks if the username and password are correct and is in the database)
  localStorage.setItem("user", username); //stores the inloged users username in (Java side gets the users data so tampering in this value breaks nothing)
  window.location.assign("mypages.html"); //takes the user to mypages.html
}

/**
 * validation of the user inputted Username
 * @param {String} Username - the user inputted Username
 * @Link the regex i used for validation is based on a simplification of the RFC 2822 standard https://tools.ietf.org/html/rfc2822#section-3.4.1
 * @return {Boolean} true or false depending on if the Username was validated or not
 */
function validateUsername(username) {
  const regex = new RegExp(
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
  ); //adhears to 99.99% of all email addresses in actual use today. and is based on RFC 2822  https://tools.ietf.org/html/rfc2822#section-3.4.1

  if (regex.test(username)) {
    console.log(username + " is valid"); // TODO: REMOVE TEST PASSWORD CHECK
    return true;
  } else {
    message.push(username + " är inte en standard email address");
    return false;
  }
}

/**
 * validation of the user inputted password
 * @param {String} password - the user inputted password
 * @return {Boolean}  true or false depending on if the password was validated or not
 */
function validatePassword(password) {
  const regex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,40})"
  ); //Password need to be at least 6 characters but max 40, include 1 special character, 1 uppercase character and a number
  //do not by mistake format the regex string changes on format and probably breaks !
  if (regex.test(password)) {
    console.log(password + " is valid"); // TODO: REMOVE TEST PASSWORD CHECK
    return true;
  } else {
    message.push(
      password + " did not adhear to password standard of the site "
    );
    return false;
  }
}

/**
 * event listeners for when login is submitted
 */
form.addEventListener("submit", (e) => {
  //just a dubble check if someone edits the html
  if (username.length === 0 || password.length === 0) {
    message.push("username and password can't be blank or null");
  }

  if (validateUsername(username.value) && validatePassword(password.value)) {
    //if all validations return true
    Success();
  }
  if (message.length > 0) {
    e.preventDefault(); //prevents page reload on submit
    errorMessages.innerHTML = message.join("\n , ");
  }
});

//password tests
validatePassword("password");
validatePassword("=N<^EuPc=aG+`53@P$&m");
validatePassword("wqddsm7pripUCnJuMAGaQsx3D3JsgvgndTxPk9A9");
validatePassword("socjusuohoowdtrereobobkyitvbaexqdvdzkxar");

//username tests
validateUsername("Lukas");
validateUsername("lukas@gmail.com");
validateUsername("");
