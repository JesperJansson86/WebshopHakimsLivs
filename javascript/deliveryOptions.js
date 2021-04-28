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

    /* Om kunden har Stockholm som postort blir leveransen gratis */
    if (city === "stockholm" || city === "Stockholm") {
        localStorage.setItem("deliveryCost", 0);
        localStorage.setItem("TotalAmount", JSON.parse(localStorage.getItem("basketValue")));
    } else {
        localStorage.setItem("deliveryCost", 39);
    }

    return true;
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
    // {
    //     "products" : [
    //     {
    //         "product_id" : 1,
    //         "amount": 2
    //     },
    //     {
    //         "product_id" : 2,
    //         "amount": 5
    //     }
    // ],
    //     "delivery_option_id" : 1,
    //     "firstName": "Jane",
    //     "lastName": "Andresson",
    //     "address": "Stadsgårdshamnen 22",
    //     "areaCode" : 11645,
    //     "city": "Stockholm",
    //     "email": "jabari45@example.org",
    //     "phoneNumber": "070-1740605"
    // }

    var productsFromLocalstorage = JSON.parse(localStorage.getItem("cart"));
var productJSON = [];
    for (let id in productsFromLocalstorage) {
        id = parseInt(id);
        const quantity = productsFromLocalstorage[id];
       productJSON.push({product_id : id, amount : quantity})
    }
    console.log(JSON.stringify(productJSON))
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
    console.log("MEN VAD FAAAAAAAN");
    console.log(productsFromLocalstorage)
    console.log(productsFromLocalstorage[1])
    console.log(productsFromLocalstorage[2])
    localStorage.setItem("customerName", firstname + " " + lastname);

    return false;
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