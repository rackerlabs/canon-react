var baseUrl = (() => {
  var url = document.location.href.split("/docs")[0];
  var script = document.createElement('script');
  script.src = url + "/documentation/bundle.js";
  document.body.appendChild(script);
})();