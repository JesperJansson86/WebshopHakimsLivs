$(document).ready(function () {
    $("#buttonSubmit").on("click", function () {
        if (validation()) {
            signUp();
        }
    });
    $("#email").on("change paste input keyup", function() {
        validateEmail($(this)) ? renderValid($(this)) : renderInvalid($(this));
    });
    $("#password").on("change paste input keyup", function () {
        compareFields($(this), $("#psw2"));
        validatePassword($(this).val()) ? renderValid($(this)) : renderInvalid($(this));
    });
    $("#firstname").on("change paste input keyup", function (){
        validateName($(this)) ? renderValid($(this)) : renderInvalid($(this));
    });
    $("#lastname").on("change paste input keyup", function (){
        validateName($(this)) ? renderValid($(this)) : renderInvalid($(this));
    });
    $("#psw2").on("change paste input keyup", function () {
        compareFields($("#password"), $(this));
    });
    $("#phone").on("change paste input keyup", function () {
        validatePhonenumber($(this)) ? renderValid($(this)) : renderInvalid($(this));
    });
    $("#adress").on("change paste input keyup", function(){
        validateAddress($(this)) ? renderValid($(this)) : renderInvalid($(this));
    });
    $("#areacode").on("change paste input keyup", function(){
        fieldNotEmpty($(this)) && validateAreaCode($(this)) ? renderValid($(this)) : renderInvalid($(this));
    });
    $("#city").on("change paste input keyup", function(){
        validateName($(this)) ? renderValid($(this)) : renderInvalid($(this));
    });
})

/**
 * Samlingsfunktion för samtliga valideringar.
 */

function validation() {
    var validated = (
        validateEmail($("#email")) &&
            validatePassword($("#password").val()) &&
            validateName($("#firstname")) &&
            validateName($("#lastname")) &&
            validatePhonenumber($("#phone")) &&
            validateAddress($("#adress")) &&
            validateAreaCode($("#areacode")) &&
            validateName($("#city"))
    )
    validated ? signUp() : fail();
}

/**
 * Funktionen returnerar True om mail är korrekt ifylld enligt HTML5s inbyggda funktion.
 * @returns {boolean}
 */
function validateEmail(field) {
    var input = document.createElement('input');
    input.type = 'email';
    input.value = field.val();
    if(input.value.length < 3) return false;
    return input.checkValidity();
}

/**
 * Kontroll av namn
 * @param field {String}
 * @returns {boolean}
 */
function validateName(field){
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,30}$/;     
        return regex.test(field.val());
}

function validateAddress(field){
    const regex = /^[a-z A-ZåöäÅÖÄ 0-9]{1,30}$/;     
        return regex.test(field.val());
}



/**
 * Kontroll av lösenord inskrivet i fält "psw"
 * @param password {String}
 * @returns {boolean}
 */
function validatePassword(password) {
    const regex = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=])(?=\S+$).{6,40}$"); //Password need to be at least 6 characters but max 40, include 1 special character, 1 uppercase character and a number
    //do not by mistake format the regex string changes on format and probably breaks !
    return regex.test(password);
}


/**
 * Jämför lösenord i fält med id "psw" och "psw2".
 * @returns {boolean}
 */
function compareFields(field1, field2) {
    if (field1.val() === field2.val()) {
        renderValid(field2);
        return true;
    } else {
        renderInvalid(field2);
        return false;
    }
}

/**
 * kontrollerar att data i fält börjar med 0 och är minst 7 tecken.
 * @param field {textfield}
 * @returns {boolean}
 */
function validatePhonenumber(field){
    const regex = /^0\d{6,}/g;
    return regex.test(field.val());
}

/**
 * kontrollerar att data i fält inte börjar med 0 och är 5 siffror.
 * @param field {textfield}
 * @returns {boolean}
 */
function validateAreaCode(field){
    const regex = /^[1-9]\d{4}/g;
    return regex.test(field.val());
}

/**
 * Ändrar fält till att visas som OK med bootstraps "is-valid"
 * @param object {textfield}
 */
function renderValid(object){
    object.removeClass("is-invalid");
    object.addClass("is-valid");
}

/**
 * Ändrar fält till att visas som ej OK med bootstraps "is-invalid"
 * @param object {textfield}
 */
function renderInvalid(object){
    object.removeClass("is-valid");
    object.addClass("is-invalid");
}

/**
 * checks if field is not empty.
 * @param field {textfield}
 * @returns {boolean}
 */
function fieldNotEmpty(field){
    return field.val().length > 0;
}

/**
 * This is for sending to server
 * password not
 */
function signUp() {

    const errorMessages = document.getElementById("errorMessage"); //div that holds login error messages

    var objectdata = JSON.stringify({
        'firstname' : $("#firstname").val(),
        'lastname' : $("#lastname").val(),
        'email' : $("#email").val(),
        'password' : $("#password").val(),
        'phone' : $("#phone").val(),
        'address' : $("#adress").val(),
        'areaCode' : $("#areacode").val(),
        'city' : $("#city").val()
    })

    const url = 'https://hakimslivs.herokuapp.com/api/customer/add'
    const requestData = {
      method : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body : objectdata
    }

    fetch(url, requestData)
    .then(response => {
      if(response.status == 200) {
          window.location.replace("login.html");
      } else {
          return response.text();
      }
    })
    .then(responseData => {
        throw new Error(responseData);
    })
    .catch(error => {
      errorMessages.innerHTML =
          "Fel vid registrering: " + error.message;
    });
return false;

}

/**
 * if validation fails.
 */
function fail() {
    document.getElementById("bigError").innerHTML =
    "Kontrollera att du fyllt i alla uppgifter";
    console.log("Something went wrong...");
}