fetch("/Website/headersFooterSidebar/headerConfirm.html")
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
