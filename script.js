function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myNavbar").classList.remove("stationary");
      document.getElementById("myNavbar").classList.add("mobile");
  
    } else {
      document.getElementById("myNavbar").classList.remove("mobile");
      document.getElementById("myNavbar").classList.add("stationary");
    }
  }
  
  window.onscroll = function() {scrollFunction()};