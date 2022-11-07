let btn_1= document.querySelector("#b-1");
let btn_2= document.querySelector("#b-2");
let btn_3= document.querySelector("#b-3");
let btn_4= document.querySelector("#b-4");
let btn_5= document.querySelector("#b-5");
let btn_6= document.querySelector("#b-6");

let div_1 =document.querySelector("#div-1");
let div_2 =document.querySelector("#div-2");
let div_3 =document.querySelector("#div-3");
let div_4 =document.querySelector("#div-4");
let div_5 =document.querySelector("#div-5");
let div_6 =document.querySelector("#div-6");

let icon_1 = document.querySelector("#icon-1");
let icon_2 = document.querySelector("#icon-2");
let icon_3 = document.querySelector("#icon-3");
let icon_4 = document.querySelector("#icon-4");
let icon_5 = document.querySelector("#icon-5");
let icon_6 = document.querySelector("#icon-6");

let div=[div_1,div_2,div_3,div_4,div_5,div_6];
let icon =[icon_1,icon_2,icon_3,icon_4,icon_5,icon_6,];

 
let show =true;
function ftn1() {
    if (show==true) {
        show=false;
        div_1.style.display="block";
        icon_1.style.transform = "rotate(45deg)";
        for(let i =1;i<div.length;i++){
            div[i].style.display="none";
            icon[i].style.transform="rotate(0deg)"
         }
    } else {
 show=true;
 div_1.style.display="none";
 icon_1.style.transform = "rotate(0deg)";
       
    
 
}}

function ftn2() {
    if (show==true) {
        show=false;
        div_2.style.display="block";
        icon_2.style.transform = "rotate(45deg)";
    } else {
 show=true;
 div_2.style.display="none";
 icon_2.style.transform = "rotate(0deg)";
 }
       
    
 
}

