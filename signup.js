function save(){
  localStorage.setItem("username", document.forms.signup.user.value);
  if(document.forms.signup.user.value == ""){
    alert("enter value");
  }
}
