//alert("Connected");
var angry_link1 = "https://www.youtube.com/embed/OPf0YbXqDm0";
var angry_link2 = "https://www.youtube.com/embed/YykjpeuMNEk";
var angry_link3 = "https://www.youtube.com/embed/2vjPBrBU-TM";
var angry_link4 = "https://www.youtube.com/embed/HMUDVMiITOU";
var angry_link5 = "https://www.youtube.com/embed/7zp1TbLFPp8";
var angry_link6 = "https://www.youtube.com/embed/7-7knsP2n5w";
var angry_link7 = "https://www.youtube.com/embed/hT_nvWreIhg";
var angry_link8 = "https://www.youtube.com/embed/34Na4j8AVgA";
var angry_link9 = "https://www.youtube.com/embed/WTJSt4wP2ME";
var angry_link10 = "https://www.youtube.com/embed/v6IAJOOmDMg";

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
