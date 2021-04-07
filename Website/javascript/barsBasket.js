/**
 * Hämtar header, footer och sidobar till sidorna som handlar om varukorgen.
 */

fetch("/Website/headersFooterSidebar/headerBasket.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("header").innerHTML = data;
  });

fetch("/Website/headersFooterSidebar/footerStandard.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });
