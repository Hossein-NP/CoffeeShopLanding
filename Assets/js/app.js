// mobile menu links active 
const menuLinks = document.querySelectorAll(".mob_nav-item");
const shopItem = document.querySelector(".shop-item");

menuLinks.forEach((link) => {
  link.addEventListener("click", () =>{
    menuLinks.forEach(i => {
      i.classList.remove("active");
      if(shopItem.classList.contains("active")){
        submenu.classList.remove("open");
        chevron.classList.remove("rotate-180");
      }
    });
    link.classList.add("active");
  });
})

// disable links 
const links = document.querySelectorAll("header nav ul li a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
  })
})

// open shop sub menu 
const shopBtn = document.querySelector(".mob_nav-item > button");
const submenu = document.querySelector(".mob_shop-sub");
const chevron = shopBtn.querySelector("svg:last-child");

shopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  submenu.classList.toggle("open");
  chevron.classList.toggle("rotate-180");
});

