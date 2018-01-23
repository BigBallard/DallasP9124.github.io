$(function(){
  $(".dropdown-item").click(function(){
    var post = $(this).attr("post")
    var url = "../../post/" + post + ".html"
    $("#current").load(url)
  })
})