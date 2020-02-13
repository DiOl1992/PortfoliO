let header = document.getElementById("header");

onscroll = function fixedMenuHandler() {
    if (window.pageYOffset > header.scrollHeight) {
        header.classList.add("fixed");


    } else {
        header.classList.remove("fixed");
    }

}
