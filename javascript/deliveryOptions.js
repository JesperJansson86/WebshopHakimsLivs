localStorage.setItem("deliveryType", "home");
localStorage.setItem("deliveryCost", 39);


/**
 * Om kunden väljer hemleverans behöver den ange vissa kontaktuppgifter
 * Om någon uppgift saknas visat ett felmeddelande
 **/

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

    var productsFromLocalstorage = JSON.parse(localStorage.getItem("cart"));
    var productJSON = [];
    for (let id in productsFromLocalstorage) {
        id = parseInt(id);
        const quantity = productsFromLocalstorage[id];
        productJSON.push({product_id : id, amount : quantity})
    }
    console.log(JSON.stringify(productJSON))
    var parseCustomer = {
        products: productJSON,
        delivery_option_id : 2,
        firstName: firstname,
        lastName: lastname,
        address : adress,
        areaCode : zip,
        city : city,
        email: email,
        phoneNumber : phone
    };
    var customerJSON = JSON.stringify(parseCustomer);
    console.log(customerJSON);
    localStorage.setItem("customerName", firstname + " " + lastname);

    /* Om kunden har Stockholm som postort blir leveransen gratis */
    if (city === "stockholm" || city === "Stockholm") {
        localStorage.setItem("deliveryCost", 0);
        localStorage.setItem("TotalAmount", JSON.parse(localStorage.getItem("basketValue")));
    } else {
        localStorage.setItem("deliveryCost", 39);
    }
    const requestData = customerJSON;

    const url = 'https://hakimslivs.herokuapp.com/api/orders/add'
    const options = {
        method : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body : requestData
    }

    fetchOrderAndRedirectOrShowError(url, options);

    return false;
}

/**
 * Om kunden väljer att hämta i butik behöver den ange färre kontaktuppgifter
 * Om någon uppgift saknas visat ett felmeddelande
 **/

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

    var productsFromLocalstorage = JSON.parse(localStorage.getItem("cart"));
    var productJSON = [];
    for (let id in productsFromLocalstorage) {
        id = parseInt(id);
        const quantity = productsFromLocalstorage[id];
       productJSON.push({product_id : id, amount : quantity})
    }

    var parseCustomer = {
      products: productJSON,
      delivery_option_id : 1,
      firstName: firstname,
      lastName: lastname,
      address : null,
      areaCode : null,
      city : null,
      email: email,
      phoneNumber : phone
    };
    var customerJSON = JSON.stringify(parseCustomer);
    localStorage.setItem("customerName", firstname + " " + lastname);


    const requestData = customerJSON;

    const url = 'https://hakimslivs.herokuapp.com/api/orders/add'
    const options = {
        method : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body : requestData
    }

    fetchOrderAndRedirectOrShowError(url, options);

    return false;
}

async function fetchOrderAndRedirectOrShowError(url, options){
    fetch(url, options)
        .then(response => response.json())
        .then(responseData => {
            const success = responseData.success;
            const message = responseData.message;
            if (success) {
                window.location.replace("./confirmation.html");
            } else if(success == false) {
                document.getElementById("bigError").innerHTML =
                    "Fel vid hantering av order: " + message;
            } else {
                document.getElementById("bigError").innerHTML =
                    "Fel vid hantering av order: Internal server error";
            }
        })
        .catch(error => {
        console.error(error);
        document.getElementById("bigError").innerHTML =
            "Fel vid hantering av order: Internal server error";
        });
}

/** Visar och döljer, samt räknar ut leveranskostnad och totalsumma beroende av leveransalternativ */

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