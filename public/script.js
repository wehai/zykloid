window.onscroll = function() {scrollFunction()};

function toStartPage(){
  window.location.href="/index.html"
  
}

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("title").style.fontSize = "7vw";
    document.getElementById("title").style.top = "10%";
    document.getElementById("primary_header").style.height = "20%";
  } else {
    document.getElementById("title").style.fontSize = "15vw";
    document.getElementById("title").style.top = "50%";
    document.getElementById("primary_header").style.height = "100%";
  }
}

