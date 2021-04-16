const specialCharacterCheck = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const emailCheck = /^[a-z0-9._%+-]{1,64}@[a-z0-9.-]{1,252}\.[a-z]{2,3}$/i;


function checkName(){
    let alertElement = document.getElementById("alert-name"); 
    let name = document.getElementById('name').value;

    if(name.length <2){
        alertElement.innerHTML = 'Namnet du angett måste vara minst 2 bokstäver'
        return false;
    }
    else if(/\d/.test(name)){
        alertElement.innerHTML = 'Ange ett namn utan siffror'
        return false;
    }
    else if(specialCharacterCheck.test(name)){
        alertElement.innerHTML = 'Ange ett namn utan specialtecken'
        return false;
    }
     alertElement.innerHTML = '';
    return true;

}

function checkEmail(){
    let alertElement = document.getElementById("alert-email"); 
    let email = document.getElementById('email').value;

    if(email.length < 6){
        alertElement.innerHTML = 'Addressen du angav är för kort'
        return false;
    }
    else if(!email.match(emailCheck)){
        alertElement.innerHTML = 'Använd bokstäver, giltiga tecken eller siffror och ett @ när du anger din mail'
        return false;
    }
    alertElement.innerHTML = '';
    return true;
    
}


function checkMessage(){
    let alertElement = document.getElementById("alert-message"); 
    let message = document.getElementById('message').value;

    if(message == null || message == ""){
      alertElement.innerHTML = 'Meddelandet kan inte vara tomt'
      return false;
    }
    else{
        true;
    }

}

function sendMessage(e){ 

 let alertElement = document.getElementById("alert-submit"); 
  e.preventDefault();

 if(!(checkName())|| !(checkEmail()) || !(checkMessage())){
     alertElement.innerHTML = 'Något stämmer inte, kontrollera dina ifyllda uppgifter'
     return false;
 }
alertElement.innerHTML = '';
 e.target.submit();
 return true;

}