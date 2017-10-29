//alert("Connected");
var angry_link1 = "https://www.youtube.com/embed/l2RFAw1zqJE";
var angry_link2 = "https://www.youtube.com/embed/1-3exHGBtOg";
var angry_link3 = "https://www.youtube.com/embed/nXcHRO_H-Yo";
var angry_link4 = "https://www.youtube.com/embed/Q-GLuydiMe4";
var angry_link5 = "https://www.youtube.com/embed/kOkQ4T5WO9E";
var angry_link6 = "https://www.youtube.com/embed/FM7MFYoylVs";
var angry_link7 = "https://www.youtube.com/embed/Ho32Oh6b4jc";
var angry_link8 = "https://www.youtube.com/embed/39_OmBO9jVg";
var angry_link9 = "https://www.youtube.com/embed/PT2_F-1esPk";
var angry_link10 = "https://www.youtube.com/embed/AbPED9bisSc";

var angry = [angry_link1, angry_link2, angry_link3, angry_link4, angry_link5, angry_link6, angry_link7, angry_link8, angry_link9];

var one;
one = Math.random()*9;
one1 = Math.floor(one);

document.getElementById("yoo1").setAttribute("src",angry[one1]);

var two;
two = Math.random()*9;
two2 = Math.floor(two);
if(two2 ==one1)
  two2 = (two2 + 1)%9;
document.getElementById("yoo2").setAttribute("src",angry[two2]);

var three;
three = Math.random()*9;
three3 = Math.floor(three);
while(three3 == two2 || three3 == one1)
  three3 = (three3+1)%9;
document.getElementById("yoo3").setAttribute("src",angry[three3]);
