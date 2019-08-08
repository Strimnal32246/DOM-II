// Your code goes here
let navText = document.querySelectorAll(".nav-link");
navText.forEach(element => {
  element.addEventListener("mouseover", event => {
    event.target.style.color = "yellow";
  });
});
navText.forEach(element => {
  element.addEventListener("mouseleave", event => {
    event.target.style.color = "black";
  });
});


//WHEN SIGN ME UP BUTTONS ARE CLICKED THEY WILL BECOME DARKER BLUE, IF CLICKED AGAIN THEY WILL GO BACK TO ORIGINAL COLOR
//STOPPED PROPAGATION, CLICK DOES NOT TRIGGER THE CLICK EVENT OF THE BODY
let button = document.querySelectorAll(".btn");
button.forEach(element => {
  element.addEventListener("click", event => {
    event.stopPropagation();

    if (event.target.style.backgroundColor != "blue") {
      event.target.style.backgroundColor = "blue";
    } else if (event.target.style.backgroundColor === "blue") {
      event.target.style.backgroundColor = "#17A2B8";
    }
  });
});
const sunDiv = document.querySelector(".destination");
sunDiv.addEventListener("click", function(e) {
  console.log(`Clicking has fired this function: ${e}`);
  e.target.style.backgroundColor = "lime";
});
const smuButton = document.querySelector(".btn");
smuButton.addEventListener("click", function(e) {
  e.target.style.backgroundColor = "red";
  e.target.style.border = "1px solid purple";
  e.stopPropagation();
});

//#2    `mouseenter`
const logoH = document.querySelector(".logo-heading");
logoH.addEventListener("mouseenter", e => {
  e.target.style.color = "green";
});

//#3      `mouseleave`
logoH.addEventListener("mouseleave", e => {
  e.target.style.color = "black";
});

//#4	`keydown`
const bodyA = document.querySelector("body");
bodyA.addEventListener("keydown", function(event) {
  console.log(`${event.code} was pressed down.`);
});
//#5	`keyup`
const bodyb = document.querySelector("body");
bodyb.addEventListener("keyup", function(event) {
  console.log(`${event.code} was pressed released.`);
});

//#6	`wheel`
const pyDest = document.querySelector(".content-destination h2");
pyDest.addEventListener("wheel", function(event) {
  event.target.fontSize = "28px";
});
//#7	`focus`
const letsGo = document.querySelector("a");
letsGo.addEventListener("focus", event => {
  event.target.style.backgroundColor = "grey";
});

//#8	`mousedown`
const allheader = document.querySelector("header");
allheader.addEventListener("mousedown", function(event) {
  event.target.style.backgroundColor = "red";
});
//#9	`select`
function logSelection(event) {
  const log = document.getElementById("log");
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  );
  log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector("input");
input.addEventListener("select", logSelection);

//#10 	`dblclick`
const head2 = document.querySelector("header h2");
head2.addEventListener("dblclick", function(event) {
  event.target.style.color = "red";
});

//prevent default  Prevents the link from going to Google
const prevDef = document.querySelector("a");
prevDef.addEventListener("click", function(event) {
  event.preventDefault();
});