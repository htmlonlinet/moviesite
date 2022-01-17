function search(){
  var s = window.location.assign("search.html?movie=" + document.forms.search.movie.value);
  var link = document.createElement("link")
  link.innerText = s;
  link.href = "javascript:" + s;
  document.body.appendChild(link);
}
