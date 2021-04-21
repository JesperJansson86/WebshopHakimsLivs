function getProducts() {

  
  let getFromLS = JSON.parse(localStorage.getItem("Knapp"));
  if (getFromLS === null && document.getElementById("titleOfPage").innerText != "Välkommen!") {
    document.getElementById("titleOfPage").innerHTML = "Alla produkter";
  } else {
    $.getJSON("https://hakimslivs.herokuapp.com/api/product/all", function (data) {
      $.each(data, function (key, value) {
        if (value.category.id == getFromLS) {
          document.getElementById("titleOfPage").innerHTML = value.category.category;
          
        }
      });
    });

    localStorage.removeItem("Knapp");
  }


  let output =
  $.getJSON("https://hakimslivs.herokuapp.com/api/product/all", function (value) {
    if(document.getElementById("titleOfPage").innerText == "Välkommen!"){
      var visibleProducts = [];
      $.each(value, function (key, value) {
        if (value.visibility) {
          visibleProducts.push(value);
        }
      })
      var displayedProducts = 6;
        for (var i = 0; i < displayedProducts; i++) {
          var product = visibleProducts[Math.floor(Math.random() * visibleProducts.length)];
          //Tar bort framslumpad product ur arrayen så att inga dubbletter visas
          var removeIndex = visibleProducts.map(prod => prod.id).indexOf(product.id);
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
                  <p>Pris: ${product.price} kr</p>
                  
                  <p class="my-1"><small class="text-muted">Jmfrpris: ${Math.round((product.price/product.size) * 1000)}/${product.unit.id} kr</small></p>
                  <p><small class="text-muted">Lagerstatus: ${Math.round(Math.random() * 10)}</small></p>
                
                  <div class="d-grid gap-2">
                    <button class="buy-btn btn btn-success" data-id="${product.id}">Köp</button>
                  </div>
                </div>
    
              </div>
            </div>
                         `;
        }
    }
    else{
      $.each(value, function (key, value) {
        if ((value.category.id == getFromLS || getFromLS === null) && value.visibility) {
          document.getElementById("card").innerHTML += `
          <div class="col-md-6 col-lg-4">
            <div class="card text-dark border-success bg-light mb-3">
                    
              <div class="card-body">
                <h5 class="card-title">${value.title}</h5>
  
                <img src="https://raw.githubusercontent.com/JesperJansson86/WebshopHakimsLivs/S01-4/Testdata/img/${value.imageList[0].image}" class="img-fluid">
  
                <p class="card-text">${value.description}</p>
              </div>
                  
  
              <div class="card-body text-end">
                <p>Pris: ${value.price} kr</p>
                
                <p class="my-1"><small class="text-muted">Jmfrpris: ${Math.round((value.price/value.size) * 1000)}/${value.unit.id} kr</small></p>
                <p><small class="text-muted">Lagerstatus: ${Math.round(Math.random() * 10)}</small></p>
              
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


  });
    return output;
  }

  async function main() {
  const products = await getProducts();
  localStorage.setItem("products", JSON.stringify(products));
  

  
    

    const buyButtons = document.querySelectorAll(".buy-btn");
    buyButtons.forEach((b) =>
      b.addEventListener("click", handlebuyClick)
    );
    
    function handlebuyClick(e) {
      let checkBasketQuantity = JSON.parse(localStorage.getItem("basketQuantity"));
      if(checkBasketQuantity < 20){
        const button = e.target;
        const productId = button.dataset.id; 
        sendItemToCart(productId);
        localStorage.setItem("basketQuantity",checkBasketQuantity +1);  
        document.getElementById("basketQ").innerHTML = JSON.parse(localStorage.getItem("basketQuantity"));
      }
      else{
        alert('Varukorgen är full, max 20 produkter!');
      }


    }

    function sendItemToCart(productId){
      let cart = JSON.parse(localStorage.getItem('cart')||'{}'); 
      if(productId in cart) { 
        cart[productId]++  
      } else{
        cart[productId]=1 
      }
      localStorage.setItem("cart", JSON.stringify(cart)); 


      }

  }
  document.addEventListener("DOMContentLoaded", main);

