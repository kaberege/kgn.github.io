/*  Styling the countDate section */

let [days, hours, minutes, seconds] = [100, 23, 59, 59];
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
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
var uniLog = document.getElementById("unilogo");
const myBar = document.getElementById("myBar");
myBar.addEventListener("click", myFunction)
function myFunction(){
  if(uniLog.className === "unilogo"){
    uniLog.className = "responsive";
  }else{
    uniLog.className = "unilogo";
  }
}
window.addEventListener("resize",()=>{
if(window.innerWidth >= 920){
  uniLog.className = "unilogo";
}
});

//========================footer news letter ======================
const myInput = document.getElementById("mail");
const mySubmit = document.getElementById("sendmail");
mySubmit.addEventListener("click", (e)=>{
e.preventDefault();
if(myInput.value == null || myInput.value == ""){
  alert("Enter your email to proceed");
}else{
let myPro = prompt("Enter your Name here to proceed");
if(myPro == ""){
  alert("Your Name is required to proceed");
}else{
  alert("Well done! " + myPro + "\nYour subscription is marked");
}
myInput.value ="";
}
});

//========================footer copyright year======================
const date = new Date();
const currentYear = document.getElementById("myYear");
currentYear.innerHTML = date.getFullYear();