function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myNavbar").classList.remove("stationary");
    document.getElementById("myNavbar").classList.add("mobile");
  } else {
    document.getElementById("myNavbar").classList.remove("mobile");
    document.getElementById("myNavbar").classList.add("stationary");
  }
}

function toggleMenu() {
  let hamburger = document.getElementsByClassName("navbar-toggler");
  let menu = document.getElementById("myNavbar");
  if (!hamburger[0].classList.contains("collapsed") && menu.classList.contains("stationary")) {
    document.getElementById("myNavbar").classList.add("opened-navbar");
    
  }else{
    document.getElementById("myNavbar").classList.remove("opened-navbar");
  }
}
if ("ontouchstart" in document.documentElement) {
  document.querySelector(".button-33").style.display = "none";
}
window.onscroll = function () { scrollFunction() };
document.getElementsByClassName("navbar-toggler")[0].onclick = function () { toggleMenu() };


