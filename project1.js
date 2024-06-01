//========================Side bar======================

const mySide = document.getElementById("mySideBar");
const sideDelete = document.getElementById("sideRemove");
const barIcon = document.getElementById("sideIcon");

sideDelete.addEventListener("click", () => {

});

barIcon.addEventListener("click", () => {
    if(mySide.className === "navlist"){
        mySide.className = "responsiveSide";
    }
});

sideDelete.addEventListener("click", ()=>{
mySide.className = "navlist";
});


//========================footer copyright year======================
const date = new Date();
const currentYear = document.getElementById("thisYear");
currentYear.innerHTML = date.getFullYear();