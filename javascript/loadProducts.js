function getProducts() {
  let getFromLS = JSON.parse(localStorage.getItem("Knapp"));
  if (
    getFromLS === null &&
    document.getElementById("titleOfPage").innerText != "Välkommen!"
  ) {
    document.getElementById("titleOfPage").innerHTML = "Alla produkter";
  } else {
    $.getJSON(
      "https://hakimslivs.herokuapp.com/api/product/all",
      function (data) {
        $.each(data, function (key, value) {
          if (value.category.id == getFromLS) {
            document.getElementById("titleOfPage").innerHTML =
              value.category.category;
          }
        });
      }
    );

    localStorage.removeItem("Knapp");
  }

  let output = $.getJSON(
    "https://hakimslivs.herokuapp.com/api/product/all",
    function (value) {
      if (document.getElementById("titleOfPage").innerText == "Välkommen!") {
        var visibleProducts = [];
        $.each(value, function (key, value) {
          if (value.visibility) {
            visibleProducts.push(value);
          }
        });
        var displayedProducts = 6;
        for (var i = 0; i < displayedProducts; i++) {
          var product =
            visibleProducts[Math.floor(Math.random() * visibleProducts.length)];
          //Tar bort framslumpad product ur arrayen så att inga dubbletter visas
          var removeIndex = visibleProducts
            .map((prod) => prod.id)
            .indexOf(product.id);
          visibleProducts.splice(removeIndex, 1);

          document.getElementById("card").innerHTML += `
            <div class="col-md-6 col-lg-4">
              <div class="card text-dark border-success bg-light mb-3">
                      
                <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
    
                  <img src="https://raw.githubusercontent.com/JesperJansson86/WebshopHakimsLivs/S01-4/Testdata/img/${product.imageList[0].image}" class="img-fluid">
    
                  <p class="card-text">${product.description}</p>
                </div>
                    
    
                <div class="card-body text-end">
                  <h4>Pris: ${product.price} kr</h4>
                  
                  <p><small class="text-muted">Lagerstatus: ${product.inventory}</small></p>
                
                  <div class="d-grid gap-2">
                    <button class="buy-btn btn btn-success" data-id="${product.id}">Köp</button>
                  </div>
                </div>
    
              </div>
            </div>
                         `;
        }
      } else {
        $.each(value, function (key, value) {
          if (
            (value.category.id == getFromLS || getFromLS === null) &&
            value.visibility
          ) {
            document.getElementById("card").innerHTML += `
          <div class="col-md-6 col-lg-4">
            <div class="card text-dark border-success bg-light mb-3">
                    
              <div class="card-body">
                <h5 class="card-title">${value.title}</h5>
  
                <img src="https://raw.githubusercontent.com/JesperJansson86/WebshopHakimsLivs/S01-4/Testdata/img/${value.imageList[0].image}" class="img-fluid">
  
                <p class="card-text">${value.description}</p>
              </div>
                  
  
              <div class="card-body text-end">
                <h4>Pris: ${value.price} kr</h4>
                
                <p><small class="text-muted">Lagerstatus: ${value.inventory}</small></p>
              
                <div class="d-grid gap-2">
                  <button class="buy-btn btn btn-success" data-id="${value.id}">Köp</button>
                </div>
              </div>
            </div>
          </div>
                       `;
          }
        });
      }
    }
  );
  return output;
}

async function main() {
  const products = await getProducts();
  localStorage.setItem("products", JSON.stringify(products));

  const buyButtons = document.querySelectorAll(".buy-btn");
  buyButtons.forEach((b) => b.addEventListener("click", handlebuyClick));
  buyButtons.forEach((element) => {
    element.disabled = isInventoryEmpty(element.dataset.id);
    if(isInventoryEmpty(element.dataset.id) == true){
      element.innerHTML = "Slut i lager"
    }
    else{
      element.innerHTML = "Köp"
    }
  });

  function isInventoryEmpty(id) {
    let changeStatus = JSON.parse(localStorage.getItem("products"));
    let itemsInCart = JSON.parse(localStorage.getItem("cart"));
  
    if (itemsInCart[id] == changeStatus[id - 1].inventory) {
      return true;
    } else {
      return false;
    }
  }

  function handlebuyClick(e) {
    let checkBasketQuantity = JSON.parse(
      localStorage.getItem("basketQuantity")
    );
    const button = e.target;
    const productId = button.dataset.id;
    sendItemToCart(productId);
    localStorage.setItem("basketQuantity", checkBasketQuantity + 1);
    document.getElementById("basketQ").innerHTML = JSON.parse(
      localStorage.getItem("basketQuantity")
    );

    addToCartPopUp("success", "Varan har lagts i varukorgen!");

    //Minskar lagersaldot med 1 när du klickar på KÖP
    let changeStatus = JSON.parse(localStorage.getItem("products"));
    changeStatus[productId - 1].inventory--;
    localStorage.setItem("products", JSON.stringify(changeStatus));
  }
}

function addToCartPopUp(type, message) {
  let alert = '<div class="alert alert-' + type + '">' + message + "</div>";

  $(".alert-message").append(alert);
  $(".alert-message .alert")
    .fadeIn(200)
    .delay(1000)
    .fadeOut(2000, function () {
      $(this).remove();
    });
}

function sendItemToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart") || "{}");
  if (productId in cart) {
    cart[productId]++;
  } else {
    cart[productId] = 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

document.addEventListener("DOMContentLoaded", main);
