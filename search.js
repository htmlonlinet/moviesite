function search(){
  window.location.assign("search.html?movie=" + document.forms.search.movie.value);
  document.getElementById("link").innerText = document.forms.search.movie.value;
  document.getElementById("link").href = document.forms.search.movie.value;
}
