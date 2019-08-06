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

//WHEN THE WHEEL IS SCROLLED IN NIGHTTIME UI THE LOGO FLASHES THROUGH THE COLORS OF THE RAINBOW
document.addEventListener('scroll', () => {
    if (h1.style.color === 'white') {h1.style.color = 'red';}
    else if (h1.style.color === 'red') {h1.style.color = 'orange';}
    else if (h1.style.color === 'orange') {h1.style.color = 'yellow';}
    else if (h1.style.color === 'yellow') {h1.style.color = 'green';}
    else if (h1.style.color === 'green') {h1.style.color = 'blue';}
    else if (h1.style.color === 'blue') {h1.style.color = 'purple';}
    else if (h1.style.color === 'purple') {h1.style.color = 'red';}
});

//WHEN SIGN ME UP BUTTONS ARE CLICKED THEY WILL BECOME DARKER BLUE, IF CLICKED AGAIN THEY WILL GO BACK TO ORIGINAL COLOR
//STOPPED PROPAGATION, CLICK DOES NOT TRIGGER THE CLICK EVENT OF THE BODY
let button = document.querySelectorAll('.btn');
button.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.stopPropagation();

        if (event.target.style.backgroundColor != 'blue'){
            event.target.style.backgroundColor = 'blue';
        }
        else if (event.target.style.backgroundColor === 'blue'){
            event.target.style.backgroundColor = '#17A2B8';
        }
    });
});
//WHEN THE PAGE FINISHES LOADING, IT APPENDS A NEW DIV TO THE NAV BAR

window.addEventListener('load', (event) => {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = 'Lorem ipsum doler sit amet.';
    document.querySelector('.container').appendChild(newDiv);
});

//SWITCHES BACK TO DAYTIME MODE WHEN THE D KEY IS RELEASED

document.addEventListener('keyup', (event) => {
    if (event.key === 'd') {
        body.style.backgroundColor = 'white';
        header.style.background = 'white';
        footer.style.background = '#FFEBCD';
        anchorText.forEach((element) => {element.style.color = 'black';});
        paragraphText.forEach((element) => {element.style.color = 'black';});
        h1.style.color = 'black';
        h2.forEach((element) => {element.style.color = 'black';});
        h4.forEach((element) => {element.style.color = 'black';});
    }
});
//Changes footer section background to lightred on scroll. Not propagated from earlier.
document.addEventListener("scroll", function(event) {
  intro.style.background = 'lightred';
});
