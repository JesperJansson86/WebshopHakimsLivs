function renderCart() {
  document.getElementById("bigError").innerHTML = "";
  let itemsInCart = JSON.parse(localStorage.getItem("cart")); // byt namn på "cart" så att det matchar och kan kopplas till produktsidan
  let output = "";
  let sum = 0;
  let totalQuantity = 0;

  const products = JSON.parse(localStorage.getItem("products")); // byt namn på "products" så att det matchar och kan kopplas till produktsidan

  for (let id in itemsInCart) {
    // räknar ut antalet produkter totalt i varukorgen
    id = parseInt(id);
    const product = products.find((p) => p.id === id);
    const quantity = itemsInCart[id];
    sum += product.price * quantity;
    totalQuantity += quantity;
    localStorage.setItem("basketQuantity", totalQuantity);
  }

  for (let id in itemsInCart) {
    // loopar igenom och fyller output med info om produkt
    id = parseInt(id);
    const product = products.find((p) => p.id === id);
    const quantity = itemsInCart[id];
    localStorage.setItem("basketValue", sum);

    output += ` 
    <p class="mb-1" style="font-weight: 500">${product.title}</p>
    <div class="card border-success mb-3">
      <div class="card-body">
        <div class="row">
          <div class="col">
          <img style="width: 100%; height: auto;" src="https://raw.githubusercontent.com/JesperJansson86/WebshopHakimsLivs/S01-4/Testdata/img/${
            product.imageList[0].image
          }">
          </div>
          <div class="col">
            <div class="row">
              <div class="col">
                <button class="btn btn-success btn-sm remove-btn"  data-id="${
                  product.id
                }">-</button>
              </div>
              <div class="col">
                <p style="font-weight: 500">Antal</p>
                <p>${quantity} st</p>
              </div>
              <div class="col">
                <button class="btn btn-success btn-sm add-btn"  
                 data-id="${product.id}">+</button>
              </div>
            </div>
          </div>
          <div class="col">
            <p style="font-weight: 500">á pris</p>
            <p>${product.price} kr</p>
          </div>
          <div class="col">
            <p style="font-weight: 500">Totalpris</p>
            <p>${quantity * product.price} kr</p>
          </div>
          <div class="col">
          <br>
            <button class="btn btn-outline-success delete-btn"  data-id="${
              product.id
            }">Ta bort</button>
          </div>
        </div>        
      </div>
    </div>
    `;
    calculateShippment(sum);
  }

  document.getElementById("cart-output").innerHTML = output; // här renderas html-snutten ut

  IsCartEmpty();

  const addItemButtons = document.querySelectorAll(".add-btn"); // lägger till + knappar för varje produkt

  addItemButtons.forEach((element) => {
    element.disabled = isInventoryEmpty(element.dataset.id);
  });

  addItemButtons.forEach((b) =>
    b.addEventListener("click", function (e) {
      let button = e.target;
      const productId = button.dataset.id;
      console.log(productId)
      parseInt(productId);
      console.log("klick - add" + productId);

      let changeStatus = JSON.parse(localStorage.getItem("products"));
      let itemsInCart = JSON.parse(localStorage.getItem("cart"));


      for (let i = 0; i < changeStatus.length; i++) {
        if(productId == changeStatus[i].id){
            changeStatus = changeStatus[i];
        }
      }

      console.log(changeStatus);

      
      if (itemsInCart[productId] < changeStatus.inventory) {   
        console.log("inventory " + changeStatus.inventory);  
        itemsInCart[productId]++;

        localStorage.setItem("cart", JSON.stringify(itemsInCart)); // sparar varukorgen med det nya antalet produkter efter klick
        renderCart(); // renderar varukorgen
      }
    })
  );

  const removeItemButtons = document.querySelectorAll(".remove-btn"); // lägger till - knappar för varje produkt
  removeItemButtons.forEach((b) =>
    b.addEventListener("click", function (e) {
      const button = e.target;
      const productId = button.dataset.id;
      console.log("klick - remove" + productId);

      let itemsInCart = JSON.parse(localStorage.getItem("cart"));
      itemsInCart[productId]--;

      if (itemsInCart[productId] == 0) {
        delete itemsInCart[productId];
      }

      localStorage.setItem("cart", JSON.stringify(itemsInCart)); // sparar varukorgen med det nya antalet produkter efter klick
      renderCart(); // renderar varukorgen
    })
  );

  const deleteItemButtons = document.querySelectorAll(".delete-btn"); // lägger till delete knappar för varje produkt
  deleteItemButtons.forEach((b) =>
    b.addEventListener("click", function (e) {
      const button = e.target;
      const productId = button.dataset.id;
      console.log("klick - delete" + productId);
      let itemsInCart = JSON.parse(localStorage.getItem("cart"));

      delete itemsInCart[productId];

      localStorage.setItem("cart", JSON.stringify(itemsInCart)); // sparar varukorgen med det nya antalet produkter efter klick
      renderCart(); // renderar varukorgen
    })
  );
}
renderCart();

function isInventoryEmpty(id) {
  
  let changeStatus = JSON.parse(localStorage.getItem("products"));
  let itemsInCart = JSON.parse(localStorage.getItem("cart"));

  for (let i = 0; i < changeStatus.length; i++) {
    if(id == changeStatus[i].id){
        changeStatus = changeStatus[i];
    }
  }

  if (itemsInCart[id] == changeStatus.inventory) {
    return true;
  } else {
    return false;
  }
}

function IsCartEmpty() {
  // kollar om varukorgen är tom
  let itemsInCart = JSON.parse(localStorage.getItem("cart") || "{}");
  if (Object.keys(itemsInCart).length === 0) {
    document.getElementById("bigError").innerHTML = "Din varukorg är tom";
    localStorage.clear();
    document.getElementById("basketValue").innerHTML = "";
    document.getElementById("nextPageBtn").disabled = true;

    return true;
  }
  document.getElementById("nextPageBtn").disabled = false;
  return false;
}

function calculateShippment(sum) {
  const shippment = 39;

  document.getElementById(
    "basketValue"
  ).innerHTML = `<b>Summa varor:</b> ${sum.toFixed(2)}  kr`;
}

function proceedToShippment(e) {
  // checkar så att kunden inte checkar ut en tom varukorg

  e.preventDefault();

  if (IsCartEmpty()) {
    document.getElementById("bigError").innerHTML =
      "Du kan inte fortsätta till leverans när din varukorg är tom";

    return false;
  }
  e.target.submit();

  return true;
}

/*< tillhörande kod i html för knappen så att proceedToShippment(e) funkar
    form id="proceed" action="index.html" onsubmit="return proceedToShippment(event);"> 
   <!-- Submit button -->
   <button type="submit" class="btn btn-primary btn-block mb-4" >fortsätt till frakt/leverans</button>
   </form>*/
