function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myNavbar").style.marginLeft = "50px";
      document.getElementById("myNavbar").style.marginRight = "50px";
      document.getElementById("myNavbar").style.marginTop = "5px";
      document.getElementById("myNavbar").style.background = "rgba(255, 255, 255, 1)";
      document.getElementById("myNavbar").style.borderRadius = "50px";
  
    } else {
      document.getElementById("myNavbar").style.marginLeft = "20px";
      document.getElementById("myNavbar").style.marginRight = "20px";
      document.getElementById("myNavbar").style.marginTop = "20px";
      document.getElementById("myNavbar").style.background = "transparent";
      document.getElementById("myNavbar").style.borderRadius = "10px";
    }
  }
  
  window.onscroll = function() {scrollFunction()};