let modalWork = document.getElementsByClassName("modal-work");

let modalWorkArr = [];
for (let i = 0; i < modalWork.length; i++) {
    modalWorkArr[i] = modalWork[i].getElementsByClassName("modal-work__preview");
}


//let items = modalWork[0].getElementsByClassName("modal-work__preview");

let btnForward = document.getElementsByClassName("btn-forward");
let btnBack = document.getElementsByClassName("btn-back");



function findIndexActiveItem(bb) {
    for (let i = 0; i < bb.length; i++) {

        if (bb[i].classList.contains("active")) {
            return i;
        }
    }

    return 0;
}



for (let i = 0; i < btnForward.length; i++) {
    let items = modalWorkArr[i];

    btnForward[i].addEventListener("click", function () {


        let iActive = findIndexActiveItem(items);

        items[iActive].classList.toggle("active");

        if (items.length - 1 === iActive) {
            iActive = -1;
        }

        items[iActive + 1].classList.toggle("active");
    })


    btnBack[i].addEventListener("click", function () {
        let iActive = findIndexActiveItem(items);


        items[iActive].classList.toggle("active");

        if (0 === iActive) {
            iActive = items.length;
        }

        items[iActive - 1].classList.toggle("active");
    })
}
