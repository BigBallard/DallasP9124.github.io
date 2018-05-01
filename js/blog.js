function loadContent(post){
    var url = "../../posts/" + post + ".html"
    $("#current").load(url)
}

$( document ).ready(function() {
  $("#current").load("../../posts/post13.html")
});