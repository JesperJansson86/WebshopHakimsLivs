
fetch("/Website/headersFooterSidebar/headerStandard.html")
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

fetch("/Website/headersFooterSidebar/sidebarStandard.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    const app = document.getElementById("sidebar");
    app.innerHTML = data;

    var scripts = app.querySelectorAll("script");

    if (scripts !== null && scripts.length > 0) {
      var loadScript = (index) => {
        if (index < scripts.length) {
          var newScript = document.createElement("script");

          if (scripts[index].innerText) {
            var inlineScript = document.createTextNode(
              scripts[index].innerText
            );
            newScript.appendChild(inlineScript);
          } else {
            newScript.src = scripts[index].src;
          }
          scripts[index].parentNode.removeChild(scripts[index]);
          newScript.addEventListener("load", (event) =>
            loadScript(index + 1)
          );
          newScript.addEventListener("error", (event) =>
            loadScript(index + 1)
          );
          app.appendChild(newScript);
        }
      };

      loadScript(0); // Start loading script 0. Function is recursive to load the next script after the current one has finished downloading.
    }
  });