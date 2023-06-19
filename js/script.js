/*-- ----------------header section---------------*/
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
menu.addEventListener("click", () => {
menu.classList.toggle("active");
navbar.classList.toggle("active");
})
document.querySelectorAll(".nav_link").forEach(n=> n.addEventListener("click", () => {
    menu.classList.remove("active");
    navbar.classList.remove("active");
}));
/*-- ----------------header section---------------*/


/*-- ----------------service section---------------*/
const serviceItems = document.querySelector(".service-items");
const popup = document.querySelector(".popup-box")
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");

serviceItems.addEventListener("click",function(event){
  if(event.target.tagName.toLowerCase() == "button"){
     const item =event.target.parentElement;
     const h3 = item.querySelector("h3").innerHTML;
     const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
     popup.querySelector("h3").innerHTML = h3;
     popup.querySelector(".popup-body").innerHTML = readMoreCont;
     popupBox();
  }

})

popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function(event){
   if(event.target == popup){
      popupBox();
   }
})

function popupBox(){
  popup.classList.toggle("open");
}
/*-- ----------------service section---------------*/