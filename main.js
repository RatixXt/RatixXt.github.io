function showMessage() {
  alert( 'Привет всем присутствующим!' );
}

function changepic() {
  var src = ($("#my_image").attr("src") === "/img/first.jpg") ? "/img/first.jpg" : "/img/second.jpg";
  alert( src );
  $("#my_image").attr("src", src);
}
