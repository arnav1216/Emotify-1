//alert("Connected");
var angry_link1 = "https://www.youtube.com/watch?v=FyASdjZE0R0";
var angry_link2 = "https://www.youtube.com/watch?v=wt7fO-Fk8V0";
var angry_link3 = "https://www.youtube.com/watch?v=aatr_2MstrI";
var angry_link4 = "https://www.youtube.com/watch?v=RD38JT8rypY";
var angry_link5 = "https://www.youtube.com/watch?v=W-TE_Ys4iwM";
var angry_link6 = "https://www.youtube.com/watch?v=_kqQDCxRCzM";
var angry_link7 = "https://www.youtube.com/watch?v=RBumgq5yVrA";
var angry_link8 = "https://www.youtube.com/watch?v=2i2khp_npdE";
var angry_link9 = "https://www.youtube.com/watch?v=h3pJZSTQqIg";
var angry_link10 = "https://www.youtube.com/watch?v=STO4-8vkG0U";

var angry = [angry_link1, angry_link2, angry_link3, angry_link4, angry_link5, angry_link6, angry_link7, angry_link8, angry_link9,angry_link10];

var one;
one = Math.random()*10;
one1 = Math.floor(one);

document.getElementById("yoo1").setAttribute("src",angry[one1]);

var two;
two = Math.random()*10;
two2 = Math.floor(two);

document.getElementById("yoo2").setAttribute("src",angry[two2]);

var three;
three = Math.random()*10;
three3 = Math.floor(three);

document.getElementById("yoo3").setAttribute("src",angry[three3]);
