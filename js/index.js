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
