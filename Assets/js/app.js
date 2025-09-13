// mobile menu links active 
const menuLinks = document.querySelectorAll("header nav ul li");

menuLinks.forEach((link) => {
  link.addEventListener("click", () =>{
    menuLinks.forEach(i => i.classList.remove("active"));
    link.classList.add("active")
  })
})

// disable links 
const links = document.querySelectorAll("header nav ul li a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
  })
})