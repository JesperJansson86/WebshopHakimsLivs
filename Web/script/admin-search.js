//////////////////////////////////////////////////////////////////////
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
        filterCategory($(this).val());
    });
    $("#btn-filter-category").on("click",function(){
        filterCategory($("#filter-category").val());
    });
})

function searchCustomer(searchString){
    if(!validateSearchString(searchString)) return;
    searchString = cleanUpSearchString(searchString);
    console.log(`Searching customers for: ${searchString}`);
    customers = [];
    fetch("./json/customers-response.json")
        .then(response => response.json())
        .then(data => {
            filterCustomers(data); //Tills vi har sökmotor
            renderResult("customer", customers);
        })
        .catch((error) => console.log(error));


    //Tills vi har sökmotor
    function filterCustomers(dataArray){
        dataArray.forEach(customer => {
            if(JSON.stringify(customer).includes(searchString)){
                customers.push(customer);
                console.log("HAHHA");
            }
        })
    }

function searchProduct(searchString){
    if(!validateSearchString(searchString)) return;
    console.log(`Searching products for: ${searchString}`);
    products = null;
    fetch("./json/products-response.json")
        .then(response => response.json())
        .then(data => renderResult("product", data))
        .catch((error) => console.log(error));
}

function filterCategory(searchString){
    if(!validateSearchString(searchString)) return;
    categories = null;
    console.log(`filtering category by: ${searchString}`)
    renderResult("category", categories);
}

/**
 * Städar upp söksträngen innan den skickas till backend.
 * Tar bort onödig whitespace, tecken som inte bör vara med.
 * @param {String} searchString
 * @returns {String} clean String
 */
function cleanUpSearchString(searchString){
    result = searchString.trim();
    // metod för att bara behålla normala tecken i söksträngen.
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

function renderResult(resultType, results){
    if(resultType == "customer"){
        renderCustomers(results);
    } else if (resultType == "product"){
        renderProducts(results);
    } else if (resultType == "filterProducts"){
        filterProducts();
    }
}

function renderCustomers(customers){
    if(!Array.isArray(customers)) throw new Error("Not an Array");
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
    console.log("Rendering customer results")
    $("#results").append(`<tbody>`)
    customers.map(customer => {
        $("#results").append(`
            <tr>
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

function renderProducts(products){
    if(!Array.isArray(products)) throw new Error("Not an Array");

    console.log("Rendering products results")
}

function filterProducts(filter){

}