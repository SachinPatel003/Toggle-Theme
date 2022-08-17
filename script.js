cross = document.getElementById("cross")
cross.addEventListener("click", crossClicked);
let sideBar = document.getElementById("sideBar");

function crossClicked() { 
    sideBar.classList.toggle('sideBarAnm')
    cross.classList.toggle('crossAnm')
}

theHome = document.getElementById('theHome')
aboutHome = document.getElementById('aboutHome')
theHome.addEventListener('click',homeclick)

function homeclick(){
    aboutHome.classList.toggle('aaHomeAnm')
}