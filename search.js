function search(){
  window.location.assign("search.html");
  localStorage.setItem("search", document.forms.search.movie.value);
}
