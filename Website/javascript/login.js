let message; //Array that holds errorMessages
const errorMessages = document.getElementById("errorMessage"); //div that holds login error messages
const form = document.getElementById("loginForm"); //form that holds the logins
const username = document.getElementById("username"); //inputted username
const password = document.getElementById("password"); //inputted password

/**
 * if the login was successful it takes you to mypages
 */
function Success() {
  //TODO: connect to java side (were it checks if the username and password are correct and is in the database)
  localStorage.setItem("user", JSON.stringify(username)); //stores the inloged users username in (Java side gets the users data so tampering in this value breaks nothing)
  window.location.assign("./myInfo.html"); //takes the user to mypages.html
}

/**
 * removes all html tags from the string
 * @param {String} string - original string
 * @returns Sanitised String that has had all html tags removed
 */
function removeHtml(string) {
  return string.replace(/(<([^>]+)>)/gi, "");
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
    return true;
  } else {
    message = "Användarnamnet är samma som din e-post.";
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
    return true;
  } else {
    message =
      "Lösenord behöver vara mellan 6-40 tecken, innehålla 1 special tecken, 1 stor bokstav och 1 siffra.";
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

  if (
    validateUsername(removeHtml(username.value)) &&
    validatePassword(removeHtml(password.value))
  ) {
    //if all validations return true
    Success();
  }
  if (message.length > 0) {
    e.preventDefault(); //prevents page reload on submit
    errorMessages.innerHTML = message;
  }
});
