function search(){
  window.location.assign("search.html?movie=" + document.forms.search.movie.value);
  var link = document.createElement("link");
  link.innerText = window.location.search;
  link.href = "javascript:" + window.location.search;
  document.body.appendChild(link);
}
