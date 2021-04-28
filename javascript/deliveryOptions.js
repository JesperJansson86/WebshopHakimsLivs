localStorage.setItem("deliveryType", "home");

function submitDelivery() {
  firstname = document.getElementById("deliveryFirstname").value;
  lastname = document.getElementById("deliveryLastname").value;
  phone = document.getElementById("deliveryPhonenumber").value;
  email = document.getElementById("deliveryEmail").value;
  adress = document.getElementById("deliveryAddress").value;
  zip = document.getElementById("deliveryZipcode").value;
  city = document.getElementById("deliveryCity").value;

  if (
    firstname == "" ||
    lastname == "" ||
    phone == "" ||
    email == "" ||
    adress == "" ||
    zip == "" ||
    city == ""
  ) {
    document.getElementById("bigError").innerHTML =
      "Kontrollera att du fyllt i alla kontaktuppgifter";
    return false;
  }

  var parseCustomer = [
    {
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      email: email,
      adress: adress,
      zip: zip,
      city: city,
    },
  ];
  var customerJSON = JSON.stringify(parseCustomer);
  console.log(customerJSON);
  localStorage.setItem("customerName", firstname + " " + lastname);

  return true;
}

function submitPickUp() {
  firstname = document.getElementById("pickupFirstname").value;
  lastname = document.getElementById("pickupLastname").value;
  phone = document.getElementById("pickupPhonenumber").value;
  email = document.getElementById("pickupEmail").value;

  if (firstname == "" || lastname == "" || phone == "" || email == "") {
    document.getElementById("bigError").innerHTML =
      "Kontrollera att du fyllt i alla kontaktuppgifter";
    return false;
  }

  var parseCustomer = [
    {
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      email: email,
    },
  ];
  var customerJSON = JSON.stringify(parseCustomer);
  console.log(customerJSON);

  localStorage.setItem("customerName", firstname + " " + lastname);

  return true;
}

$("#storePickUp").hide();

$("#storePickUpChoice").click(function () {
  $("#homeDelivery").hide();
  $("#storePickUp").show();
  localStorage.setItem("deliveryType", "Pickup");
  localStorage.setItem("deliveryCost", 0);

  var sum = JSON.parse(localStorage.getItem("basketValue"));

  document.getElementById(
    "basketValue"
  ).innerHTML = `<b>Summa varor:</b> ${sum.toFixed(2)}  kr`;

  document.getElementById(
    "deliveryCost"
  ).innerHTML = `<b>Leverans:</b> ${JSON.parse(
    localStorage.getItem("deliveryCost")
  )} kr`;

  let d = JSON.parse(localStorage.getItem("deliveryCost"));
  let ta = d + sum;
  document.getElementById(
    "TotalAmount"
  ).innerHTML = `<b>Totalsumma: </b>${ta.toFixed(2)} kr`;
  localStorage.setItem("TotalAmount", ta);
});
$("#homeDeliveryChoice").click(function () {
  $("#homeDelivery").show();
  $("#storePickUp").hide();
  localStorage.setItem("deliveryType", "Levereras");
  localStorage.setItem("deliveryCost", 39);

  var sum = JSON.parse(localStorage.getItem("basketValue"));

  document.getElementById(
    "basketValue"
  ).innerHTML = `<b>Summa varor:</b> ${sum.toFixed(2)}  kr`;

  document.getElementById(
    "deliveryCost"
  ).innerHTML = `<b>Leverans:</b> ${JSON.parse(
    localStorage.getItem("deliveryCost")
  )} kr`;

  let d = JSON.parse(localStorage.getItem("deliveryCost"));
  let ta = d + sum;
  document.getElementById(
    "TotalAmount"
  ).innerHTML = `<b>Totalsumma: </b>${ta.toFixed(2)} kr`;
  localStorage.setItem("TotalAmount", ta);
});

/*
Uppdatera Kassan
*/
var sum = JSON.parse(localStorage.getItem("basketValue"));

document.getElementById(
  "basketValue"
).innerHTML = `<b>Summa varor:</b> ${sum.toFixed(2)}  kr`;

document.getElementById(
  "deliveryCost"
).innerHTML = `<b>Leverans:</b> ${JSON.parse(
  localStorage.getItem("deliveryCost")
)} kr`;

let d = JSON.parse(localStorage.getItem("deliveryCost"));
let ta = d + sum;
document.getElementById(
  "TotalAmount"
).innerHTML = `<b>Totalsumma: </b>${ta.toFixed(2)} kr`;
localStorage.setItem("TotalAmount", ta);