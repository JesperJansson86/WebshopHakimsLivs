const form = document.getElementById("changeInfoForm"); //form that holds the inputs that's used to change account information
const username = document.getElementById("username"); //inputted username
//apparently the user has no name (its never registered )
const password = document.getElementById("password"); //inputted password
const password2 = document.getElementById("password2"); //repeated password
const address = document.getElementById("address"); //inputted address
const areacode = document.getElementById("areacode"); //inputted areacode
const city = document.getElementById("city"); //inputted city
const phoneNumber = document.getElementById("phone"); //inputted phoneNumber
const errorMessages = document.getElementById("errorMessage"); //div that holds error messages
const changeButton = document.getElementById("changeButton");
const usernameBox = document.getElementById("usernameBox");
const passwordBox = document.getElementById("passwordBox");
const addressBox = document.getElementById("addressBox");
const phoneBox = document.getElementById("phoneBox");
const boxBox = [usernameBox, passwordBox, addressBox, phoneBox] //box that holds all the boxes (used to disable the changeButton when all the boxes are hidden
let message = ""; //Array that holds errorMessages
let itemsToSubmit = []; // creates an empty array

/**
 * Blir skickad hit om alla värderingar stämmer
 * här skickar man vidare värdena som ska ändras till java delen
 * @param valid {array} array that holds all the data the user wants to change
 */
function success(valid) {
    // TODO: connect to java that sends back a success message

    //send valid to java
    console.log(valid); // TODO: remove later just for test !
    itemsToSubmit = [] //empties array
    alert("Success");
    changeButton.disabled =false;
    window.location.reload();

}

/**
 * skickar att användaren vill radera sit account, låter sedan java göra resten
 */
function removeAccount() {
    let x = confirm("Vill du verkligen radera ditt account?")
    if (x === true) {
        // TODO: connect on java side, (checking what account this is form localstorage is unsafe!)
        location.assign("../index.html"); //just sends the user back to the main page for now

    } else {
        console.log("User did not delete account!")
    }
}

/**
 *
 * @returns {boolean}
 */
function isAllHidden() {
    return boxBox.every(box => box.style.display === "none");
}

/**
 * vissa och gömma formulären
 * @param div - är div boxen som håller i formuläret vi vill visa eller dölja
 * @param input - inmatnings fältet vi vill kunna ändra om man behöver ha data i den eller inte, också ta bart dens värde
 */
function show(div, input) {
    const formContent = document.getElementById(div);
    const inputContent = document.getElementById(input);

    if(div === "addressBox"){
        if(addressBox.style.display === "none"){
            address.required = true;
            areacode.required = true;
            city.required = true;
            addressBox.style.display = "block";
        } else {
            address.required = false;
            areacode.required = false;
            city.required = false;
            addressBox.style.display = "none";
        }
        address.value = "";
        areacode.value = "";
        city.value = "";
    } else if(div === "passwordBox"){
        if(passwordBox.style.display === "none"){
            password.required = true;
            password2.required = true;
            passwordBox.style.display ="block";

        } else{
            password.required = false;
            password2.required = false;
            passwordBox.style.display ="none";
        }
        password.value = "";
        password2.value = "";
    } else {
        if (formContent.style.display === "none") {
            inputContent.required = true;
            formContent.style.display = "block";
        } else {
            inputContent.required = false;
            formContent.style.display = "none";
        }
        inputContent.value = "";//should clear the input on show and hide
    }

    if(isAllHidden()){
        changeButton.disabled =true;
    } else{
        changeButton.disabled =false;
    }
}

/**
 * Sanitising the string, so that all html tags get removed
 * @returns {String} returns a sanitized string
 * @param {HTMLElement} string that needs to be sanitized
 */
function removeHtml(string) {
    return string.toString().replace(/(<([^>]+)>)/gi, "");
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
        message += (username + " är inte en standard email address");
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
        message += (
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
    return regex.test(field);
}

/**
 * kontrollerar att data i fält börjar med 0 och är minst 7 tecken.
 * @param {String} field
 * @returns {boolean} true om field stämmer med regexen och false om field inte stämmer med regexen
 */
function validatePhoneNumber(field) {
    const regex = /^0\d{6,}/g;
    return regex.test(field);
}

/**
 * Kollar att field har något värde
 * @param {String} field
 * @returns {boolean} true om field har ett värde och false om field inte har ett värde
 */
function fieldNotEmpty(field) {
    return field.length > 0;
}

/**
 * checks the form validation
 * @return {boolean}
 */
function validation() {
    const values = [username, password, phoneNumber, areacode, address, city];
    const valid = [validateUsername(removeHtml(values[0].value)), validatePassword(removeHtml(values[1].value)),
        validatePhoneNumber(removeHtml(values[2].value)), validateAreaCode(removeHtml(values[3].value)),
        fieldNotEmpty(removeHtml(values[4].value)), fieldNotEmpty(removeHtml(values[5].value))];

    if (valid.some(value => value === true)) {
        for (let i = 0; i < valid.length; i++) {
            if (valid[i] === true) {
                itemsToSubmit.push(values[i].value);
            }
            // TODO: maybe add a if false here and make it push null or some special character we don't aloe in the forms to represent values we don't want changed
        }
        if (itemsToSubmit.length > 0) {
            return true;
        }
    }
    return false;

}

/**
 * när användaren trycker på submit knappen så callas validation() och samlas error messages
 */
form.addEventListener("submit", (e) => {
    e.preventDefault(); //prevents page reload on submit
    if (validation()) {
        success(itemsToSubmit);
    } else {
        alert("validation did not succeed")
    }
    if (message.length > 0) {
        errorMessages.innerHTML = message;
    }
});
