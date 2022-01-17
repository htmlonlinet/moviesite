function search(){
  window.location.assign("search.html#s=" + document.getElementById("movie").value);
  document.getElementById("search").innerText = document.getElementById("movie").value;
  document.getElementById("search").href = document.getElementById("movie").value;
}
