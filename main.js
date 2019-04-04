alert('XSS');
var src = ($("#my_image").attr("src") === "/img/first.jpg") ? "/img/first.jpg" : "/img/second.jpg";
$("#my_image").attr("src", src);

