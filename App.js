let loadingTime;

function pageLoading() {
    loadingTime = setTimeout(showPage, 1000);
}
        
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.querySelector("#home-section").style.display = "block";
    document.querySelector("#project-section").style.display = "block"
    document.querySelector(".form-container").style.display = "block"
    document.querySelector("footer").style.display = "block"
}


