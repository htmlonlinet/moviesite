function search(){
  window.location.assign("search.html?movie=" + document.forms.search.movie.value);
  localStorage.setItem("search", document.forms.search.movie.value);
}
