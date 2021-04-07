/**
 * Hämtar header, footer och sidobar till sidorna som handlar om bekräftelse.
 */

fetch("../headersFooterSidebar/headerConfirm.html")
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
