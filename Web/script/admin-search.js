//////////////////////////////////////////////////////////////////////
//  G82003-14                                                       //
//  (Använd det som redan gjorts i sökfält kund).                   //
//                                                                  //
//  Sökfält och filtrering för administratör                        //
//                                                                  //
//  Söka på kunds namn (filtrera efter namn, ort etc.)              //
//  Söka fram produkter                                             //
//  Söka produkter från en särskild kategori                        //
//  Söka bland beställningar (filtrera status)                      //
//  Visa resultat för sökträffar                                    //
//  Ett sökfält med radioknappar för vilken tabell man söker i,     //
//  alternativt en sökmotor per sida.                               //
//  Vi får välja som funkar bäst med övrig layout/design)           //
//////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $("#search-customer").on("keyup change", function(){
        searchCustomer(($(this).val()));
    });
    $("#btn-search-customer").on("click", function(){
        searchCustomer($("#search-customer").val());
    })
    $("#search-product").on("keyup change", function() {
        searchProduct($(this).val());
    });
    $("#btn-search-product").on("click", function(){
        searchProduct($("#search-product").val());
    });
    $("#filter-category").on("keyup change", function(){
        filterByCategory($(this).val());
    });
    $("#btn-filter-category").on("click",function(){
        filterByCategory($("#filter-category").val());
    });

    setFilterButtons();
})


/**
 * Städar upp söksträngen innan den skickas till backend.
 * Tar bort onödig whitespace, tecken som inte bör vara med.
 * @param {String} searchString
 * @returns {String} clean String
 */
function cleanUpSearchString(searchString){
    result = searchString.trim();
    // Lägg till metod för att bara behålla normala tecken i söksträngen.
    return result;
}

/**
 * Validates content of searchString before sending to backend.
 * @param {String} searchString
 * @returns {boolean}
 */
function validateSearchString(searchString){
    searchString = searchString.trim();
    if(searchString === null || searchString === undefined || searchString.length === 0) return false;

    return true;
}

//Ligger här för att kunna nås vid både produktsök och filtrering
productsArray = [];

/**
 * Tar emot kategorierna i JSON-format och kallar på funktionen för att rendera knapparna
 */
function setFilterButtons(){
    fetch("./json/categories.json")
        .then(response => response.json())
        .then(data => renderFilterButtons(data))
        .catch((error) => console.log(error));
}

/**
 * Tar emot sträng i kundsöknings-inmatningsfält, hämtar kunder och filtrerar efter sökningen.
 * @param {String} searchString
 */
function searchCustomer(searchString){
    if(!validateSearchString(searchString)) return;
    searchString = cleanUpSearchString(searchString);
    customerArray = [];
    fetch("./json/customers-response.json")
        .then(response => response.json())
        .then(data => {
            customerArray = filterData(data, searchString); //Tills vi har sökmotor
            renderResult("customer", customerArray);
        })
        .catch((error) => console.log(error));
}

/**
 * Tar emot sträng i produktsöknings-inmatningsfält, hämtar produkter och filtrerar efter sökningen.
 * @param {String} searchString
 */
function searchProduct(searchString){
    if(!validateSearchString(searchString)) return;
    searchString = cleanUpSearchString(searchString);
    productsArray = [];
    fetch("./json/products-response.json")
        .then(response => response.json())
        .then(data => {
            productsArray = filterData(data, searchString); //Tills vi har sökmotor
            renderResult("product", productsArray);
        })
        .catch((error) => console.log(error));
}

/**
 * begär validering av söksträng samt extra filtrering av produkt-array.
 * @param {String} searchString
 */
function filterByCategory(searchString){
    if(!validateSearchString(searchString)) return;
    renderResult("product", filterData(productsArray, searchString));
}

/**
 * Temporär filtrering vid sökning, konllar om texten finns någonstans i objektet.
 * Funktion som antagligen inte behövs när backend är implementerat.
 * @param dataArray
 * @param searchString
 */
function filterData(dataArray, searchString) {
    var filteredArray = [];
    if(searchString == "*"){
        filteredArray = dataArray;
    }
    dataArray.forEach(object => {
        if (JSON.stringify(object).toUpperCase().includes(searchString.toUpperCase())) {
            filteredArray.push(object);
        }
    })
    return filteredArray;
}

/**
 * Renderar knapparna till html-sidan.
 * @param {Object[]} buttonSet (category-objects)
 */
function renderFilterButtons(buttonSet){
    if(!Array.isArray(buttonSet)) throw new Error("Not an Array");
    buttonSet.forEach(button => {
        $("#filter-container").append(`
            <button id="btn-${button.id}" class="btn btn-primary">${button.category}</button>
        `);
        $(`#btn-${button.id}`).on("click", function(){
            filterByCategory(button.category);
        })
    })
}

/**
 * samlingsfunktion som skickar vidare till respektive renderings-funktion.
 * Kan vara onödig senare.
 * @param resultType
 * @param results
 */
function renderResult(resultType, results){
    if(resultType == "customer"){
        renderCustomers(results);
    } else if (resultType == "product"){
        renderProducts(results);
    } else if (resultType == "filterProducts"){
        filterByCategory(results);
    }
}

/**
 * renderar kundsvarssök till html.
 * @param {Object[]} customers (Customer-objects)
 */
function renderCustomers(customers){
    if(!Array.isArray(customers)) throw new Error("Not an Array");
    $("#result-amount").html(`Antal träffar: ${customers.length}`);
    $("#results").html("");
    $("#results").append(`
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Kund</th>
            <th scope="col">Adress</th>
            <th scope="col">Telefon</th>
            <th scope="col">E-post</th>
            <th scope="col">Trogen kund</th>
        </tr>
    </thead>
    `)
    $("#results").append(`<tbody>`)
    customers.map(customer => {
        $("#results").append(`
            <tr class="table-striped" onclick='alert("Här ska en kunna gå till mina sidor")'>
                <td>${customer.id}</td>
                <td class="cname">${customer.name}</td>
                <td>${customer.address.street_address}<br>${customer.address.city}</td>
                <td>${customer.mobile_number}</td>
                <td>${customer.email}</td>
                <td>${customer.loyality}</td>
            </tr>
            `);
    })
    $("#results").append(`</tbody>`)
}

/**
 * renderar kundsvarssök till html.
 * @param {Object[]} customers (produkt-objects)
 */
function renderProducts(products){
    if(!Array.isArray(products)) throw new Error("Not an Array");
    $("#result-amount").html("");
    $("#result-amount").append(`<p>Antal träffar: ${products.length}</p>`);
    $("#results").html("");
    $("#results").append(`
    <thead>
        <tr>
            <th scope="col">Varor</th>
        </tr>
    `);

    //Har inte koll på hur kortet ska se ut just nu.
    products.forEach(product => {
        $("#results").append(`
            <tr>
                <td>
                    <img src="https://via.placeholder.com/100" alt="produktbild"/>"
                    ${product.id} ${product.name} 
                    <a href="#" onclick="alert('ska leda til redigera-produkt-sida')">
                        Redigera    
                    </a>
                </td>
            </tr>
        `);
    });

    $("#results").append(`
    </thead>
    `);
}