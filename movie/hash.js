if(window.location.href == "https://moviesto.netlify.app/movie/" + window.location.hash){
  var hash = window.location.hash;
  hash.split("#s=");
  window.location.assign('https://moviesto.netlify.app/movies/' + hash);
}
