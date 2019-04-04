function changepic() {
  if ($("#my_image").attr("src") == "/img/first.jpg") {
    var src = "/img/second.jpg";
    $("#text").text("Cобачка2");
  }
  else
  {
    var src = "/img/first.jpg";
    $("#text").text("Cобачка1");
  }
  $("#my_image").attr("src", src);
}
