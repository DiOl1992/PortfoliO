let navToggle = document.getElementById("navToggle");
let navToggleLink = document.getElementsByClassName("nav__link");
let nav = document.getElementById("nav");
let navLinks = nav.getElementsByClassName("nav__link");

navToggle.addEventListener("click", function (event) {
    event.preventDefault();
    
    console.log(nav);
    nav.classList.toggle("show");
})

for (let i = 0; i < navLinks.length; i++) {
    navToggleLink[i].addEventListener("click", function (event) {
        event.preventDefault();
        let nav = document.getElementById("nav");
        nav.classList.toggle("show");

    })
}

/////////////////////////////scrollIntoView

for (let i = 0; i < navLinks.length; i++) {
   
    navLinks[i].addEventListener("click", function (event) {
        event.preventDefault();
    
        let dataScroll = navLinks[i].getAttribute("data-scroll")
        dataScroll = dataScroll.slice(1, dataScroll.length)
    
        let elmnt = document.getElementById(dataScroll)
        elmnt.scrollIntoView({behavior: "smooth"});
    })
}