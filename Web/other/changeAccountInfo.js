importScripts()
const form = document.getElementById("changeInfoForm"); //form that holds the inputs that's used to change account information
const name = document.getElementById("name"); //inputted name
const username = document.getElementById("username"); //inputted username
const password = document.getElementById("password"); //inputted password
const password2 = document.getElementById("password2"); //repeated password
const address = document.getElementById("address"); //inputted address
const phoneNumber = document.getElementById("phone"); //inputted phoneNumber
const errorMessages = document.getElementById("errorMessage"); //div that holds error messages
const changeButton = document.getElementById("changeButton");
const nameBox  = document.getElementById("nameBox");
const usernameBox  = document.getElementById("usernameBox");
const passwordBox  = document.getElementById("passwordBox");
const addressBox = document.getElementById("addressBox");
const phoneBox  = document.getElementById("phoneBox");
const boxBox = [nameBox,usernameBox,passwordBox,addressBox,phoneBox] //box that holds all the boxes (used to disable the changeButton when all the boxes are hidden
let message = ""; //Array that holds errorMessages
let toChange = []; //stores the variables that the user want to change to.

/**
 * Blir skickad hit om alla värderingar stämmer
 * här skickar man vidare värdena som ska ändras till java delen
 */
function success() {
    // TODO: connect to java that sends back a success message
   let x =   alert("Success");
    if(x === true){ //if user presses ok ? i think
    window.location.reload();
    }
}

/**
 * skickar att användaren vill radera sit account, låter sedan java göra resten
 */
function removeAccount(){
  let x =  confirm("Vill du verkligen radera ditt account?")
  if(x===true){
    // TODO: connect on java side, (checking what account this is form localstorage is unsafe!)
    location.assign("../index.html"); //just sends the user back to the main page for now

  } else{
    console.log("User did not delete account!")
  }
}

function isAllHidden(){
  function hidden(){
    let isHidden = true;
    for(let i = 0;  i <  boxBox.length;i++){
      if(boxBox[i].style.display === "block"){
        isHidden = false;
      }
    }
    return isHidden;
  }

  return !!hidden();

}

/**
 * vissa och gömma formulären
 * @param div - är div boxen som håller i formuläret vi vill visa eller dölja
 * @param input - inmatnings fältet vi vill kunna ändra om man behöver ha data i den eller inte, också ta bart dens värde
 */
function show(div,input){
  const formContent =document.getElementById(div);
  const inputContent = document.getElementById(input);

  if(formContent.style.display === "none"){
    inputContent.required = true;
    formContent.style.display = "block";
  } else {
    inputContent.required = false;
    formContent.style.display = "none";
  }
  changeButton.disabled = isAllHidden(); //changes the disable status of the changeButton depending on if
  inputContent.value ="";//should clear the input on show and hide
}

/**
 * Sanitising the string, so that all html tags get removed
 * @param {String} originalString - original string
 * @returns - Returns a sanitised string
 */
function removeHtml(originalString){
  return originalString.replace(/(<([^>]+)>)/gi, "");
}

/**
 * kontrollerar om name stämmer med regexen 
 * @param {String} name
 * @returns {boolean} true om name stämmer med regexen och false om name inte stämmer med regexen
 */
function validateName(name) {
  //TODO: change to what register account uses
  const regex = /^[a-zA-ZäöåÄÖÅ\- ]+$/;

  if (regex.test(name)) {
    return true;
  } else {
    message = (name + " did NOT adhere to the naming standard of this site");
    return false;
  }
}

/**
 * kontrollerar om username (email) stämmer med regexen  
 * @param {String} username
 * @returns {boolean} true om username stämmer med regexen och false om username inte stämmer med regexen
 */
function validateUsername(username) {
  const regex = new RegExp(
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
  ); //adheres to 99.99% of all email addresses in actual use today. and is based on RFC 2822  https://tools.ietf.org/html/rfc2822#section-3.4.1

  if (regex.test(username)) {
    return true;
  } else {
    message = (username + " är inte en standard email address");
    return false;
  }
}

/**
 * kontrollerar om username (email) stämmer med regexen  
 * @param {String} password
 * @returns {boolean} true om password stämmer med regexen och false om password inte stämmer med regexen
 */
function validatePassword(password) {
  const regex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,40})"
  ); //Password need to be at least 6 characters but max 40, include 1 special character, 1 uppercase character and a number
  //do not by mistake format the regex string changes on format and probably breaks !
  if (regex.test(password)) {
    return true;
  } else {
    message = (
      " did not adhere to password standard of the site "
    );
    return false;
  }
}

/**
 * kontrollerar om field är 4 nummer mellan 1-9
 * @param {String} field
 * @returns {boolean} true om field stämmer med regexen och false om field inte stämmer med regexen
 */
function validateAreaCode(field) {
  const regex = /^[1-9]\d{4}/g;
  return regex.test(field.val());
}

/**
 * kontrollerar att data i fält börjar med 0 och är minst 7 tecken.
 * @param {String} field
 * @returns {boolean} true om field stämmer med regexen och false om field inte stämmer med regexen
 */
function validatePhoneNumber(field) {
  const regex = /^0\d{6,}/g;
  return regex.test(field.val());
}

/**
 * Kollar att field har något värde 
 * @param {String} field
 * @returns {boolean} true om field har ett värde och false om field inte har ett värde
 */
function fieldNotEmpty(field) {
  return field.val().length > 0;
}

/**
 * checks the form validation
 * @return {boolean} true if the validation was successful and false if it failed
 */
function validation() {

}

/**
 * när användaren trycker på submit knappen så callas validation() och samlas error messages
 */
form.addEventListener("submit", (e) => {
  //a double check
  
  if (username.length === 0 || password.length === 0) {
    message = ("username and password can't be blank or null");
  }

  if (validateUsername(removeHtml(username.value)) && validatePassword(removeHtml(password.value))) {
    //if all validations return true
    success();
  }
  if (message.length > 0) {
    e.preventDefault(); //prevents page reload on submit
    errorMessages.innerHTML = message.join("\n , ");
  }
});
