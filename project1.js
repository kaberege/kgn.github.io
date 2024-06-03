//========================Side bar======================

const mySide = document.getElementById("mySideBar");
const sideDelete = document.getElementById("sideRemove");
const barIcon = document.getElementById("sideIcon");

window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
        mySide.className = "navlist";        //return to the usual class navlist
    }
});

window.addEventListener("scroll", () => {
    if (mySide.className === "responsiveSide") {
        mySide.className = "navlist";             //remove side bar on scroll
    }
});

barIcon.addEventListener("click", () => {
    if (mySide.className === "navlist") {
        mySide.className = "responsiveSide";     //display side bar when bar icon is clicked
    }
});

sideDelete.addEventListener("click", () => {
    mySide.className = "navlist";                //remove the side bar when close icon is clicked
});


//========================footer copyright year======================
const date = new Date();
const currentYear = document.getElementById("thisYear");
currentYear.innerHTML = date.getFullYear();