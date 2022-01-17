if(window.location.href == "https://moviesto.netlify.app/movie/" + window.location.hash){
  var path = window.location.pathname;
  path.split("#s=");
  window.location.pathname = path + window.location.hash;
}
