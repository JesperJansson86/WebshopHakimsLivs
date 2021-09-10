function submitForm(){
  const errorMessages = document.getElementById("errorMessage"); //div that holds login error messages
  const username = document.getElementById("username").value; //inputted username
  const password = document.getElementById("password").value; //inputted password

  formData = {
    username : username,
    password : password
  };

  bodyData = JSON.stringify(formData);

  //TODO: Ändra URL för skarpt läge.
  const url = 'https://hakimslivs.herokuapp.com/authenticate'
  const requestData = {
    method : 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body : bodyData
  }

  fetch(url, requestData)
      .then(response => {
        if(response.status == 200) {
          return response.json();
        } else {
          throw new Error("Login error.");
        }
      })
      .then(responseData => {
        localStorage.setItem("jwtToken", JSON.stringify(responseData.jwtToken));
        window.location.replace("./myInfo.html");
      })
      .catch(error => {
        errorMessages.innerHTML =
            "Fel vid inloggning: " + error.message;
      });
  return false;
}
