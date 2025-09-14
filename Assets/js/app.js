// mobile menu links active 
const menuLinks = document.querySelectorAll(".mob_nav-item");
const shopItem = document.querySelector(".shop-item");

menuLinks.forEach((link) => {
  link.addEventListener("click", () =>{
    menuLinks.forEach(i => {
      i.classList.remove("active");
      if(shopItem.classList.contains("active")){
        submenu.classList.remove("open");
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

const hamburgerMenu = document.querySelector(".hamburger-menu");
const overLay = document.querySelector(".overlay");
const mobileNav = document.querySelector(".mobile-nav");
const xIcon = document.querySelector(".nav-top-section svg:first-child");

function openMenu() {
  mobileNav.classList.add("open-nav");
  mobileNav.classList.remove("close-nav");
  overLay.classList.add("overlay-active");
  overLay.classList.remove("invisible");
  overLay.classList.remove("opacity-0");
}

function closeMenu() {
  mobileNav.classList.remove("open-nav");
  mobileNav.classList.add("close-nav");
  overLay.classList.remove("overlay-active");
  overLay.classList.add("invisible");
}

hamburgerMenu.addEventListener("click", () => {
  if (mobileNav.classList.contains("close-nav")) {
    openMenu();
  } else {
    closeMenu();
  }
});

xIcon.addEventListener("click", closeMenu);
overLay.addEventListener("click", closeMenu); // کلیک روی بک‌گراند هم منو رو ببنده
