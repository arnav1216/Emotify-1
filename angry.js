//alert("Connected");
var angry_link1 = "https://www.youtube.com/embed/7Rb7pnjbe4Q";
var angry_link2 = "https://www.youtube.com/embed/3tmd-ClpJxA";
var angry_link3 = "https://www.youtube.com/embed/kXYiU_JCYtU";
var angry_link4 = "https://www.youtube.com/embed/i8q8fFs3kTM";
var angry_link5 = "https://www.youtube.com/embed/E929gqIcwwI";
var angry_link6 = "https://www.youtube.com/embed/v5NeyI4-fdI";
var angry_link7 = "https://www.youtube.com/embed/lSMGdOXcoh4";
var angry_link8 = "https://www.youtube.com/embed/Ct6BUPvE2sM";
var angry_link9 = "https://www.youtube.com/embed/DksSPZTZES0";

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
