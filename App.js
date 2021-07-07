let loadingTime;
        
function pageLoading() {
    loadingTime = setTimeout(showPage, 4000);
}
        
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.querySelector("#home-section").style.display = "block"
    document.querySelector("#project-section").style.display = "block"
    document.querySelector(".form-container").style.display = "block"
    document.querySelector("footer").style.display = "block"
}

window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    document.getElementById("project-header").style.opacity = "1";
    document.getElementById("project-header").style.transition = "opacity 0.5s";
    document.getElementById("project-header").style.transitionTimingFunction = "ease-in"; 
  } else{
    document.getElementById("project-header").style.opacity = "0.1";
  
  }
}

