/*  Styling the countDate section */

let [days, hours, minutes, seconds] = [29, 23, 59, 59];
timer = setInterval(myCount, 1000);
function myCount() {
  seconds--;
  if (seconds == -1) {
    seconds = 59;
    minutes--;
    if (minutes == -1) {
      minutes == 59;
      hours--;
      if (hours == -1) {
        hours = 23;
        days--
        if (days == -1) {
          [days, hours, minutes, seconds] = [0, 0, 0, 0];
          clearInterval(timer);
        }
      }
    }
  }
  let d = days < 10 ? "0" + days : days;
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("day").innerHTML = d;
  document.getElementById("hour").innerHTML = h;
  document.getElementById("min").innerHTML = m;
  document.getElementById("sec").innerHTML = s;
}


//==========================================================================
/* Styling  University Logo section */
const uniLog = document.getElementById("unilogo");
const unImg = document.getElementById("unimg");
const faBars = document.createElement("div");
faBars.classList.add("bars");
faBars.innerHTML = "<i class='fas fa-bars'><i>";
const myIcon = document.getElementById("myicon");
const icoBar = document.createElement("div");
const myBoxbar = document.getElementById("boxbar");
icoBar.classList.add("icobar");
const myBar = document.getElementById("icobare");
const logBox = document.createElement("div");
logBox.classList.add("logbox");
const myCallus = document.querySelector(".callus");
const myLong = document.querySelector(".longbar");

window.addEventListener("resize", myLogo);
window.addEventListener("load", myLogo);

function myLogo() {
  let newBar = faBars.firstChild;
  newBar.classList.add("newbar");
  if (window.innerWidth <= 600) {
    uniLog.innerHTML = "";
    uniLog.appendChild(unImg);
    uniLog.appendChild(faBars);
    uniLog.appendChild(myBoxbar);
    myBoxbar.style.display = "none";
    newBar.addEventListener("click", () => {
      if (myBoxbar.style.display === "none") {
        myBoxbar.style.display = "block";
      } else {
        myBoxbar.style.display = "none";
      }
      myBoxbar.classList.toggle("boxdrop");
    });
  } else if (window.innerWidth < 922) {
    uniLog.innerHTML = "";
    uniLog.appendChild(unImg);
    icoBar.appendChild(myIcon);
    icoBar.appendChild(faBars);
    uniLog.appendChild(icoBar);
    uniLog.appendChild(myBoxbar);
    myBoxbar.style.display = "none";
    newBar.addEventListener("click", () => {
      if (myBoxbar.style.display === "none") {
        myBoxbar.style.display = "block";
      } else {
        myBoxbar.style.display = "none";
      }
      myBoxbar.classList.toggle("boxdrop");
    });
  } else if (window.innerWidth <= 1200) {
    uniLog.innerHTML = "";
    myBoxbar.style.display = "none";
    myBoxbar.classList.remove("boxdrop");
    logBox.appendChild(unImg);
    logBox.appendChild(myBoxbar);
    myBoxbar.style.display = "flex";
    uniLog.appendChild(logBox);
    uniLog.appendChild(myIcon);
  } else if (window.innerWidth >= 1200) {
    uniLog.innerHTML = "";
    myBoxbar.style.display = "none";
    myBoxbar.classList.remove("boxdrop");
    logBox.appendChild(unImg);
    logBox.appendChild(myBoxbar);
    myBoxbar.style.display = "flex";
    myBar.appendChild(myCallus);
    myBar.appendChild(myLong);
    myBar.appendChild(myIcon);
    uniLog.appendChild(logBox);
    uniLog.appendChild(myBar);
  }
}

//========================footer copyright year======================
const date = new Date();
const currentYear = document.getElementById("myYear");
currentYear.innerHTML = date.getFullYear();