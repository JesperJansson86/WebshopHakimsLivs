<<<<<<< HEAD:javascript/barsBasket.js
fetch("../headersFooterSidebar/headerBasket.html")
=======
/**
 * Hämtar header, footer och sidobar till sidorna som handlar om varukorgen.
 */

fetch("/Website/headersFooterSidebar/headerBasket.html")
>>>>>>> d4320a8280118bf45d9b2bd3bb2169b8fb45bb7e:Website/javascript/barsBasket.js
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("header").innerHTML = data;
  });

fetch("../headersFooterSidebar/footerStandard.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });
