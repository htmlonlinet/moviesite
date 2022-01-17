function search(){
  window.location.assign("search.html?movie=" + document.forms.search.movie.value);
  var link = document.createElement("link")
  link.innerText = document.forms.search.movie.value;
  link.href = "javascript:" + document.forms.search.movie.value;
  document.body.appendChild(link);
}
