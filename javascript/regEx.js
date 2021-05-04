    /** Regular Expression Patterns for customer info **/
    let regExName = "[a-z A-ZåäöÅÄÖ]{2,30}";
    let regExPhone = "[0-9]{5,20}";
    let regExEmail = "[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]{1,252}\.[a-z]{2,3}";
    let regExAddress = "[a-z A-ZåöäÅÖÄ 0-9]{1,30}";
    let regExZip = "^[1-9 ][0-9 ]{5,7}";

    /* Input fields for pick up orders */
    document.getElementById("pickupFirstname").setAttribute("pattern", regExName);
    document.getElementById("pickupLastname").setAttribute("pattern", regExName);
    document.getElementById("pickupPhonenumber").setAttribute("pattern", regExPhone);
    document.getElementById("pickupEmail").setAttribute("pattern", regExEmail);

    /* Input fields for home delivery orders */
    document.getElementById("deliveryFirstname").setAttribute("pattern", regExName);
    document.getElementById("deliveryLastname").setAttribute("pattern", regExName);
    document.getElementById("deliveryPhonenumber").setAttribute("pattern", regExPhone);
    document.getElementById("deliveryEmail").setAttribute("pattern", regExEmail);
    document.getElementById("deliveryAddress").setAttribute("pattern", regExAddress);
    document.getElementById("deliveryZipcode").setAttribute("pattern", regExZip);
    document.getElementById("deliveryCity").setAttribute("pattern", regExAddress);