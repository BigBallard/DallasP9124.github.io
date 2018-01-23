function hideToggle(elementId){
  var x = document.getElementById(elementId)
  alert(elementId)
  if(x.style.display === "none"){
    x.style.display = "block"
  }else{
    x.style.display = "none"
  }
}

$(function(){
  $("#current").load("../posts/post1.html")
})