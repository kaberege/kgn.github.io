//========================Side bar======================

const mySide = document.getElementById("mySideBar");
const sideDelete = document.getElementById("sideRemove");
const barIcon = document.getElementById("sideIcon");
const icoAbout = document.getElementById("myAbout");
const icoDown = document.getElementById("myCaret");
const dropDiv = document.getElementById("myDropy");

icoAbout.addEventListener("click", () => {
    dropDiv.classList.toggle("toggleable");
    icoDown.classList.toggle("turnIcon")

});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
        mySide.className = "navlist";        //return to the usual class navlist
    }
});

window.addEventListener("scroll", () => {
    if (mySide.className === "responsiveSide") {
        mySide.className = "navlist";             //remove sidebar on scroll
    }
});


barIcon.addEventListener("click", () => {
    if (mySide.className == "navlist") {
        mySide.className = "responsiveSide";     //display side bar when bar icon is clicked
    }
});

sideDelete.addEventListener("click", () => {
    mySide.className = "navlist";                //remove the side bar when close icon is clicked
});

//========================Testimonials======================

let slideIndex = 0;
showSlide();

const dotSlide1 = document.getElementById("dot1");
dotSlide1.addEventListener("click", () => {
    clearTimeout(timer);
    currentSlide(0);
});

const dotSlide2 = document.getElementById("dot2");
dotSlide2.addEventListener("click", () => {
    clearTimeout(timer);
    currentSlide(1);
});

const dotSlide3 = document.getElementById("dot3");
dotSlide3.addEventListener("click", () => {
    clearTimeout(timer);
    currentSlide(2);
});

const dotSlide4 = document.getElementById("dot4");
dotSlide4.addEventListener("click", () => {
    clearTimeout(timer);
    currentSlide(3);
});

function currentSlide(n) {
    slideIndex = n;
    showSlide();
}

function showSlide() {
    let thisSlide = document.getElementsByClassName("test-fade");
    let myDot = document.getElementsByClassName("dot1");
    let i;
    for (i = 0; i < thisSlide.length; i++) {
        thisSlide[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > thisSlide.length) { slideIndex = 1; }
    for (i = 0; i < myDot.length; i++) {
        myDot[i].className = myDot[i].className.replace(" active", "");
    }
    thisSlide[slideIndex - 1].style.display = "flex";
    myDot[slideIndex - 1].className += " active";
    timer = setTimeout(showSlide, 2000);
}

//========================Blog section======================
function myBlog() {
    const bDate1 = document.getElementById("myDate1");
    const bDate2 = document.getElementById("myDate2");
    const bDate3 = document.getElementById("myDate3");
    const myMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const blogDate = new Date();
    bDate1.innerHTML = myMonth[blogDate.getMonth()] + " " + blogDate.getDate() + "," + " " + blogDate.getFullYear();
    bDate2.innerHTML = myMonth[blogDate.getMonth()] + " " + blogDate.getDate() + "," + " " + blogDate.getFullYear();
    bDate3.innerHTML = myMonth[blogDate.getMonth()] + " " + blogDate.getDate() + "," + " " + blogDate.getFullYear();
}
myBlog();

//========================my contact form======================
const myForm = document.getElementById("submit");
const myFirst = document.getElementById("fname");
const myLast = document.getElementById("lname");
const myMail = document.getElementById("fmail");
const mySubject = document.getElementById("fsubject");
const myArea = document.getElementById("fmessage");

myForm.addEventListener("click", (e) => {
    e.preventDefault();
    if (myFirst.value === "" && myLast.value === "" && myMail.value === "" && mySubject.value === "" && myArea.value === "") {
        alert("Please fill all empty fields and proceed again!");
    } else {
        let myText = prompt("Please Enter your First Name");
        if (myText === null || myText === "") {
            alert('Failed to send message to @kgn');
        } else {
            alert("Hello! " + myText + "\nYour message is sent to @kgn.");
        }
    }
    myFirst.value = "";
    myLast.value = "";
    myMail.value = "";
    mySubject.value = "";
    myArea.value = "";
});

//====================my footer email================================
const mySub = document.getElementById("ftbutton");
const myEmail = document.getElementById("ftemail");
mySub.addEventListener("click", () => {
    if (myEmail.value === null || myEmail.value === "") {
        alert("Please Enter Your Email Address!");
    } else {
        if (confirm("Do you want to contact @kgn")) {
            alert('Email Sent to kgn');
        } else {
            alert('Failed to send Email to kgn');
        }
        myEmail.value = "";
    }
});

//========================footer copyright year======================
function myFooter() {
    const date = new Date();
    const currentYear = document.getElementById("thisYear");
    currentYear.innerHTML = date.getFullYear();
}
myFooter();