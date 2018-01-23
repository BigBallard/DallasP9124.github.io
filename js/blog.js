$(function(){
  $(".dropdown-item").click(function(){
    var post = $(this).attr("post")
    var url = "../../posts/" + post + ".html"
    $("#current").load(url)
  })
})