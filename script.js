let menuImg = document.querySelector(".menu-img");
let closeImg = document.querySelector(".close-menu");
let dropDown = document.querySelector(".drop-down");
let contain = document.querySelector(".container");
let comp = document.querySelector(".comp");
let company = document.querySelector(".company");
let arrowUpC = document.querySelector(".arr-up-c");
let arrowDownC = document.querySelector(".arr-down-c");
let feat2 = document.querySelector(".feat2");
let comp2 = document.querySelector(".comp2");
let arrowUpC2 = document.querySelector(".arr-up-c2");
let arrowDownC2 = document.querySelector(".arr-down-c2");
let list2 = document.querySelector(".list2");
let main = document.querySelector(".imp");

menuImg.addEventListener("click", () => {
  dropDown.classList.remove("hidden");
  closeImg.classList.remove("hide");
  menuImg.classList.replace("menu-img", "hidden");
});
closeImg.addEventListener("click", () => {
  dropDown.classList.add("hidden");
  closeImg.classList.add("hide");
  menuImg.classList.replace("hidden", "menu-img");
});

comp.addEventListener("click", () => {
  company.classList.toggle("hide");
  arrowDownC.classList.toggle("rotate");
});
comp2.addEventListener("click", () => {
  list2.classList.toggle("hide");
  arrowDownC2.classList.toggle("hide");
});
// if(dropDown.classList.contains("hidden")) {
//   window.addEventListener("hidden", ()=>{
//     dropDown.classList.add("hidden")
//   })
// }
document.addEventListener("scroll", ()=>{
  dropDown.classList.add("hidden");
  closeImg.classList.add("hide");
  menuImg.classList.replace("hidden", "menu-img");
})
main.addEventListener("click", ()=>{
  dropDown.classList.add("hidden");
  closeImg.classList.add("hide");
  menuImg.classList.replace("hidden", "menu-img");
})