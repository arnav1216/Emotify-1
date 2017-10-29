//alert("Connected");
var angry_link1 = "https://www.youtube.com/embed/GemKqzILV4w";
var angry_link2 = "https://www.youtube.com/embed/KtlgYxa6BMU";
var angry_link3 = "https://www.youtube.com/embed/YQHsXMglC9A";
var angry_link4 = "https://www.youtube.com/embed/hLQl3WQQoQ0";
var angry_link5 = "https://www.youtube.com/embed/ccKV1X9uyP4";
var angry_link6 = "https://www.youtube.com/embed/3EL20VKlvbs";
var angry_link7 = "https://www.youtube.com/embed/BxuY9FET9Y4";
var angry_link8 = "https://www.youtube.com/embed/lY2yjAdbvdQ";
var angry_link9 = "https://www.youtube.com/embed/RgKAFK5djSk";
var angry_link10 = "https://www.youtube.com/embed/KMciOb6eU24";

var angry = [angry_link1, angry_link2, angry_link3, angry_link4, angry_link5, angry_link6, angry_link7, angry_link8, angry_link9,angry_link10];

var one;
one = Math.random()*10;
one1 = Math.floor(one);

document.getElementById("yoo1").setAttribute("src",angry[one1]);

var two;
two = Math.random()*10;
two2 = Math.floor(two);
if(two2 ==one1)
  two2 = (two2 + 1)%10;
document.getElementById("yoo2").setAttribute("src",angry[two2]);

var three;
three = Math.random()*10;
three3 = Math.floor(three);
while(three3 == two2 || three3 == one1)
  three3 = (three3+1)%10;
document.getElementById("yoo3").setAttribute("src",angry[three3]);
