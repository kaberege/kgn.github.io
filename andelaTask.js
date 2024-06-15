
//variables

const sender = document.getElementById("sendName");
const sendNumber = document.getElementById("sendNumber");
const receiver = document.getElementById("receiveName");
const receivNumber = document.getElementById("receiveNumber");
const sendAmount = document.getElementById("amount");
const subButton = document.getElementById("submitted");
const myTable = document.getElementById("momo-table");

//event listeners

subButton.addEventListener('click', addTable);
myTable.addEventListener("click", listDelete);

//functions
function addTable(event) {
  event.preventDefault();

  //create empty div element
  const nullDiv = document.createElement("div");
  nullDiv.classList.add("null-div");

  //create input row
  const headRow = document.createElement("tr");
  headRow.classList.add("head-tr");

  //create th1
  const th1 = document.createElement("th");
  th1.innerHTML = "Sender";
  headRow.appendChild(th1);

  //create th2
  const th2 = document.createElement("th");
  th2.innerHTML = "Sender's number";
  headRow.appendChild(th2);

  //create th3
  const th3 = document.createElement("th");
  th3.innerHTML = "Receiver";
  headRow.appendChild(th3);

  //create th4
  const th4 = document.createElement("th");
  th4.innerHTML = "Receiver's number";
  headRow.appendChild(th4);

  //create th5
  const th5 = document.createElement("th");
  th5.innerHTML = "Amount";
  headRow.appendChild(th5);

  //create th6
  const th6 = document.createElement("th");
  th6.innerHTML = "Balance";
  headRow.appendChild(th6);

  //create th7
  const th7 = document.createElement("th");
  th7.innerHTML = "Date";
  headRow.appendChild(th7);

  //create th8
  const th8 = document.createElement("th");
  th8.innerHTML = "In/Out";
  headRow.appendChild(th8);

  //create th9
  const th9 = document.createElement("th");
  th9.innerHTML = "List/Delete";
  headRow.appendChild(th9);

  //create output row
  const outRow = document.createElement("tr");
  outRow.classList.add("out-tr");

  //create td1
  const td1 = document.createElement("td");
  td1.classList.add("td1-arrow");
  td1.innerHTML = sender.value;
  outRow.appendChild(td1);

  //create td2
  const td2 = document.createElement("td");
  td2.classList.add("td2-arrow");
  td2.innerHTML = sendNumber.value;
  outRow.appendChild(td2);

  //create td3
  const td3 = document.createElement("td");
  td3.classList.add("td3-arrow");
  td3.innerHTML = receiver.value;
  outRow.appendChild(td3);

  //create td4
  const td4 = document.createElement("td");
  td4.classList.add("td4-arrow");
  td4.innerHTML = receivNumber.value;
  outRow.appendChild(td4);

  //create td5
  const td5 = document.createElement("td");
  td5.classList.add("td5-arrow");
  td5.innerHTML = sendAmount.value;
  outRow.appendChild(td5);

  //create td6
  const td6 = document.createElement("td");
  td6.classList.add("td6-arrow");
  td6.innerHTML = "-";
  outRow.appendChild(td6);

  //create td7
  const td7 = document.createElement("td");
  td7.classList.add("td7-arrow");
  const myDate = new Date();
  td7.innerHTML = myDate.getFullYear() + ":" + (myDate.getMonth() + 1) + ":" + myDate.getDate();
  outRow.appendChild(td7);

  //create td8
  const td8 = document.createElement("td");
  td8.classList.add("td8-arrow");
  td8.innerHTML = '<i class="fas">&#xf30b;</i>';
  outRow.appendChild(td8);

  //create td9
  const td9 = document.createElement("td");
  const listButton = document.createElement("button");
  listButton.classList.add("check-button");
  listButton.innerHTML = '<i class="fas fa-check"></i>';
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("trash-button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  td9.appendChild(listButton);
  td9.appendChild(deleteButton);
  outRow.appendChild(td9);
  nullDiv.appendChild(headRow);
  nullDiv.appendChild(outRow);
  myTable.appendChild(nullDiv);
  sender.value = "";
  sendNumber.value = "";
  receiver.value = "";
  receivNumber.value = "";
  sendAmount.value = "";
}

//list and delete function
function listDelete(e) {
  let item = e.target;

  // mark the selected item
  if (item.classList[0] === "check-button") {
    const myCheck = item.parentElement.parentElement;
    myCheck.classList.toggle("completed");
  }

  // delete the selected item
  if (item.classList[0] === "trash-button") {
    const myDelete = item.parentElement.parentElement.parentElement;
    myDelete.classList.add("myFall");
    myDelete.addEventListener("transitionend", function () {
      myDelete.remove();
    });
  }
}


//================styling logo image=========================
const myTurn = document.getElementById("navImg1");
setInterval(myTransform, 20);
function myTransform() {
  myTurn.style.transform += "rotateZ(-1deg)";
}
