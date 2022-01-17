function search(){
  window.location.assign("search.html");
  var script = document.createElement("script");
  script.src = "signup.js";
  document.body.appendChild(script);
  setCookie("search", document.forms.search.movie.value);
}
