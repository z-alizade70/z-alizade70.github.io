var SLIDE=document.getElementsByClassName("slide");
const PREV=document.querySelector(".prev");
const NEXT=document.querySelector(".next");
const CONTAINER=document.querySelector(".slider-container");
const DRAG=document.querySelectorAll(".drag");
const ARRLEFT=document.querySelector(".bi-chevron-left");
const ARRRIGHT=document.querySelector(".bi-chevron-right");
const OFFERCONTAINER=document.querySelector(".offer-container");
const SUGGEST=document.querySelectorAll(".suggest");
const CHAPBTN=document.querySelector(".chapbtn");
const RASTBTN=document.querySelector(".rastbtn");
const NAVI=document.querySelector(".store");
const SUBLAYER=document.querySelector(".min-sublayer");

NAVI.addEventListener("click", function(){
 SUBLAYER.classList.toggle("hidden");
 SUBLAYER.style.transition= "500ms ease 0";
});

let offset=0;
let slideIncrement=0;
let slideDecrement = DRAG.lenght - 1;
let Decrementslide = SUGGEST.length - 1;
var n=0;
var IMAGE=document.querySelectorAll(".slide img");
function displaynone(){
for (let i=0;i<SLIDE.length;i++){
SLIDE[i].style.display = `none`;
}
}
SLIDE[0].classList.remove("active");
function notactive(){
    for(let i=0; i<SLIDE.length; i++){
    }
}
NEXT.addEventListener("click", function(){
    n++;
    if(n>SLIDE.lenght){
        n=0;}
        displaynone();
        notactive();
        SLIDE[n].style.display = `block`;
        SLIDE[n].classList.add("active");
});
PREV.addEventListener("click", function(){
    n--;
    if(n<0){
        n=SLIDE.lenght-1;
    }
    displaynone();
    notactive();
    SLIDE.style.display= `none`;
    SLIDE.classList.add("active");
});
setInterval(function(){
    n++;
    if(n>SLIDE.length-1){
        n=0;
    }
    displaynone();
    notactive();
    SLIDE[n].style.display="block";
    SLIDE[n].classList.add("active")}, 4000);
/*DISCOUNT SLIDES*/
ARRRIGHT.addEventListener("click", ()=>{
ARRRIGHT.disabled=true;
offset=DRAG[0].offsetWidth;
CONTAINER.style.transition= "left ease-in-out 500ms";
CONTAINER.style.left= -offset + `px`;
setTimeout(() => {
CONTAINER.style.transition = "none";
DRAG[slideIncrement].style.order = DRAG.lenght - 1;
CONTAINER.style.left = 0;
slideIncrement++;
slideDecrement = slideIncrement - 1;
if(slideIncrement == DRAG.length){
    slideIncrement = 0;
DRAG.forEach(drag => {
    drag.style.order = "initial";
});
}
ARRRIGHT.disabled=false;}, 500);
});
ARRLEFT.addEventListener("click", () => {
ARRLEFT.disabled = true;
offset = DRAG[0].offsetWidth;
CONTAINER.style.transition = "none";
if(slideDecrement<0){
    DRAG.forEach(drag => {
        drag.style.order = "initial";
    });
slideDecrement = DRAG.length - 1;
}
DRAG[slideDecrement].style.order = "-1";
CONTAINER.style.left = -offset + 'px';
setTimeout(() => {
    CONTAINER.style.transition = "left ease-in-out 500ms";
CONTAINER.style.left = 0;
}, 1);
setTimeout(() => {
    slideDecrement--;
    slideIncrement = slideDecrement + 1;
    ARRLEFT.disabled = false;
}, 500);
});
/*OFFER*/
RASTBTN.addEventListener("click", ()=>{
    RASTBTN.disabled=true;
    offset=SUGGEST[0].offsetWidth;
    OFFERCONTAINER.style.transition= "left ease-in-out 500ms";
    OFFERCONTAINER.style.left= -offset + `px`;
    setTimeout(() => {
        OFFERCONTAINER.style.transition = "none";
    SUGGEST[slideIncrement].style.order = SUGGEST.lenght - 1;
    OFFERCONTAINER.style.left = 0;
    slideIncrement++;
    slideDecrement = slideIncrement - 1;
    if(slideIncrement == SUGGEST.length){
        slideIncrement = 0;
    SUGGEST.forEach(suggest => {
        suggest.style.order = "initial";
    });
    }
    RASTBTN.disabled=false;}, 500);
    });
    CHAPBTN.addEventListener("click", () => {
    CHAPBTN.disabled = true;
    offset = SUGGEST[0].offsetWidth;
    OFFERCONTAINER.style.transition = "none";
    if(slideDecrement<0){
        SUGGEST.forEach(suggest=> {
            suggest.style.order = "initial";
        });
    slideDecrement = SUGGEST.length - 1;
    }
    SUGGEST[slideDecrement].style.order = "-1";
    OFFERCONTAINER.style.left = -offset + 'px';
    setTimeout(() => {
        OFFERCONTAINER.style.transition = "left ease-in-out 500ms";
        OFFERCONTAINER.style.left = 0;
    }, 1);
    setTimeout(() => {
        slideDecrement--;
        slideIncrement = slideDecrement + 1;
        RASTBTN.disabled = false;
    }, 500);
    });

   


    

