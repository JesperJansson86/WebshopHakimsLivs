function renderCart() {
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
    if (totalQuantity == 20) {
      document.getElementById("bigError").innerHTML =
        "Du får max beställa 20 varor";
    } else {
      document.getElementById("bigError").innerHTML = "";
    }
  }

  for (let id in itemsInCart) {
    // loopar igenom och fyller output med info om produkt
    id = parseInt(id);
    const product = products.find((p) => p.id === id);
    const quantity = itemsInCart[id];
    const tooManyItems =
      quantity >= getMaxQuantity(id) ||
      totalQuantity >= 20 ||
      checkTotalValueOfCart(sum); // villkor som sen används i  + knappen för att disabl:ea den om antalet produkter av viss sort, antalet produkter i varukogen, värdet i varukorgen är för högt. Sätts på varje + knapp.

    output += ` 
    <p class="mb-1" style="font-weight: 500">${product.name}</p>
    <div class="card border-success mb-3">
      <div class="card-body">
        <div class="row">
          <div class="col">
          <img style="width: 100%; height: auto;" src="https://raw.githubusercontent.com/JesperJansson86/WebshopHakimsLivs/S01-4/Testdata/img/${
            product.image
          }">
          </div>
          <div class="col">
            <div class="row">
              <div class="col">
                <button class="btn btn-outline-success btn-sm remove-btn"  data-id="${
                  product.id
                }">-</button>
              </div>
              <div class="col">
                <p style="font-weight: 500">Antal</p>
                <p>${quantity} st</p>
              </div>
              <div class="col">
                <button class="btn btn-outline-success btn-sm add-btn"  ${
                  tooManyItems ? "disabled" : ""
                } data-id="${product.id}">+</button>
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
  addItemButtons.forEach((b) =>
    b.addEventListener("click", function (e) {
      let button = e.target;
      const productId = button.dataset.id;
      parseInt(productId);
      console.log("klick - add" + productId);

      let itemsInCart = JSON.parse(localStorage.getItem("cart"));
      itemsInCart[productId]++;

      localStorage.setItem("cart", JSON.stringify(itemsInCart)); // sparar varukorgen med det nya antalet produkter efter klick
      renderCart(); // renderar varukorgen
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

  let v = JSON.parse(localStorage.getItem("basketValue"));
  const lev = 39;

  if (v !== null) {
    document.getElementById(
      "basketValue"
    ).innerHTML = `<b>Summa varor:</b> ${v.toFixed(2)}  kr`;

    if (v < 500) {
      document.getElementById("freeDelivery").innerHTML = `<b>${(
        500 - v
      ).toFixed(2)}  kr kvar till gratis leverans</b>`;
      document.getElementById(
        "deliveryCost"
      ).innerHTML = `<b>Leverans:</b> ${lev} kr`;
      localStorage.setItem("deliveryCost", lev);
    } else {
      localStorage.setItem("deliveryCost", 0);
      document.getElementById("freeDelivery").innerHTML =
        "<b>Gratis leverans </b>";
    }

    let d = JSON.parse(localStorage.getItem("deliveryCost"));
    let ta = d + v;
    document.getElementById(
      "TotalAmount"
    ).innerHTML = `<b>Totalsumma: </b>${ta.toFixed(2)} kr`;
    localStorage.setItem("TotalAmount", ta);
  }
}
renderCart();

function getMaxQuantity(productId) {
  // sätter gränser för antalet av en viss produkt man kan köpa där 1:4 (1 = produkt ID) (4 = antalet)
  const maxQuantity = {
    1: 4,
    2: 10,
    3: 5,
    4: 8,
    5: 15,
    6: 10,
    7: 5,
    8: 6,
    9: 10,
    10: 5,
    11: 6,
    12: 7,
    13: 8,
    14: 9,
    15: 10,
    16: 9,
    17: 15,
    18: 10,
    19: 10,
    20: 5,
  };
  const defaultMaxQuantity = 4; // defaultvärde om en viss produkt inte hunnit registreras

  return maxQuantity[productId] || defaultMaxQuantity;
}

function IsCartEmpty() {
  // kollar om varukorgen är tom
  let itemsInCart = JSON.parse(localStorage.getItem("cart") || "{}");
  if (Object.keys(itemsInCart).length === 0) {
    document.getElementById("bigError").innerHTML = "Din varukorg är tom";
    localStorage.removeItem("basketQuantity");
    localStorage.removeItem("basketValue");
    localStorage.removeItem("TotalAmount");
    localStorage.removeItem("deliveryCost");
    return true;
  }
  return false;
}

function checkTotalValueOfCart(sum) {
  // kollar om varukorgens totala summa överstiger 700
  localStorage.setItem("basketValue", sum);
  if (sum > 700) {
    document.getElementById("bigError").innerHTML =
      "Du får max beställa varor för 700 kr";
  } else {
    document.getElementById("bigError").innerHTML = "";
  }
  return sum > 700;
}

function calculateShippment(sum) {
  // räknar ut om kunden har rätt till fri frakt eller inte
  const shippment = 39;
  if (sum >= 500) {
    document.getElementById("total").innerHTML =
      "Summa: $" + sum.toFixed(2) + " inklusive gratis frakt";
  } else {
    let sumInkShippment = sum + shippment;
    document.getElementById("total").innerHTML =
      "Summa: $" +
      sumInkShippment.toFixed(2) +
      " inklusive fraktavgift på 39kr";
  }
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
