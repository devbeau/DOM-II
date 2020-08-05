// Mouse enter and leave on logo;
let logo = document.querySelector(".logo-heading");
logo.addEventListener('mouseenter', (event) => {
    logo.style.transition = "700ms"
    logo.style.transform = "rotate(360deg)"
    console.log("1","logo mouseenter", event)
});
logo.addEventListener('mouseleave', (event) => {
    logo.style.transition = "700ms"
    logo.style.transform = "rotate(-360deg)"
    console.log("2","logo mouseleave", event)
});

// Nav moves with downarrow and uparrow
let nav = document.querySelector("nav");
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown'){
        nav.style.transition = '750ms'
        nav.style.transform = 'translateX(-50px)';
        console.log("3","keydown event", event);
    } else if (event.key === 'ArrowUp'){
        nav.style.transition = '750ms'
        nav.style.transform = 'translateX(50px)';
        console.log("keydown event", event);
    }
});

// anchors change color

console.log("anchors", anchors)
function changeColor (el, color, time){
    return setInterval(el => el.style.background = color, time, el);
}
function changeText (el, color, time){
    return setInterval(el => el.style.color = color, time, el);
}
let anchors = document.querySelector("nav")["childNodes"];
console.log(document.querySelector("nav")["childNodes"]);

let [,home,, about,, blog,, contact,] = anchors;
let anchorstest = [home, about, blog, contact];
console.log("anchorstest", anchorstest)

for(let el of anchorstest) {
    el.addEventListener('focus', (event) => {
        el.style.transition = '1200ms ease' ;
        changeColor(el, 'blue', 400); //clearInterval is impossible from an event handler???
        changeText(el, 'white', 400); //////////////////////////////////////////////////////
        console.log("5","Anchor focusevent", event);
        clearInterval();
})}

// mousedown to shrink and push the bus right
let imageOne = document.querySelector(".intro").firstElementChild;
imageOne.addEventListener('mousedown', (event) =>{
        imageOne.style.transition = '500ms ease';
        imageOne.style.width = '250px';
        imageOne.style.transform = 'translateX(500px)'
        console.log("6","mousedown event", event);
})
//mouseup to enlarge and push it left
imageOne.addEventListener('mouseup', (event) =>{
        imageOne.style.transition = '500ms ease';
        imageOne.style.width = 'auto';
        imageOne.style.transform = 'translateX(-500px)'
        console.log("7","mouseup event", event);
})
//doubleclick changes the h2
let headTwo = imageOne.nextElementSibling;
headTwo.addEventListener('dblclick', (event) =>{
        headTwo.style.color = 'orange';
        headTwo.style.fontFamily = 'roboto';
        headTwo.style.fontSize = '20rem';
        console.log("8","dblclick event", event);
})
//draging the text changes the paragraph
let paragraph = headTwo.nextElementSibling;
paragraph.addEventListener('drag', (event) =>{
        paragraph.style.color = 'red';
        paragraph.style.fontFamily = 'comic-sans';
        console.log("9","drag event", event);
})

//copying removes header and inserts a text box
let textContH2 = document.querySelector(".text-content").firstElementChild;
let textbox = document.createElement("input")
textbox.setAttribute('type', 'text');
textContH2.addEventListener('copy', (event) =>{
    textContH2.style.display ='none';
    textContH2.style.color = 'purple';
    textContH2.style.fontFamily = 'comic-sans';
    document.querySelector(".text-content").prepend(textbox);
    console.log("10","copy event", event);
    // add event listener to input box just created
    // paste returns header
    textContH2.previousElementSibling.addEventListener('paste', (event) =>{
        textContH2.style.display ='initial';
        textContH2.style.color = 'purple';
        textContH2.style.fontFamily = 'comic-sans';
        textContH2.previousElementSibling.style.display = 'none';
        console.log("11","paste event", event);
    })
    
})

// event propagation stopped by eventListener on btnOne
let btn = document.getElementsByClassName("btn");
let [btnOne, btnTwo, btnThree] = btn;
let funSun = document.querySelector('.destination');
funSun.addEventListener('click', (event) => {
    funSun.style.color = 'white';
    funSun.style.background = 'black';
    console.log("eventPropagation victim", event)
})
btnOne.addEventListener('click', (event) => {
    btnOne.style.color = 'orange';
    btnOne.style.background = 'purple';
    event.stopPropagation("eventPropagation Hero", event);
})

//change default behaviour of anchor links
for (let el of anchorstest){
    el.addEventListener('click', event => event.preventDefault());
}