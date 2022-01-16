function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
​
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++){
    let c = ca[i];
    while(c.charAt(0) == ''){
      return c.substring(name.length, c.length);
    }
    return "";
  }
function checkCookie(){
  let user = getCookie("username");
  if(user != ""){
    document.write("<h1>welcome:</h1>" + user); 
  }else{
    user = document.forms.signup.user.value;
    if(user != "" && user != null){
      setCookie("username", user, 30);
    }
  }
}
