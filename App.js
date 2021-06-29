let loadingTime;
        
function pageLoading() {
    loadingTime = setTimeout(showPage, 4000);
}
        
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.querySelector("#home-section").style.display = "block"
    document.querySelector("#project-section").style.display = "block"
}