function getProducts() {
    return fetch("http://webacademy.se/fakestore/").then((r) =>
      r.json()
    );
  }

  function renderProducts(products) {
    let output = "";
    
    products.forEach((p) => {
      output += `
          <div class="card">
          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img src="${p.image}" class="img-fluid"/>
          <a href="#!">
          <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
          </a>
          </div>
          <div class="card-body">
          <h5 class="card-title">${p.title}</h5>
          <p class="card-text">${p.description} </p>
          <h5> $ ${p.price}</h5> 
          <button class="buy-btn" data-id="${p.id}">buy</button><br />          
          </div>
          </div>
        `;
        
        
    });
    return output;




  }

  async function main() {
  const products = await getProducts();
  localStorage.setItem("products", JSON.stringify(products));
  
  const output = renderProducts(products);

  document.getElementById("output").innerHTML = output;

  
    

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

