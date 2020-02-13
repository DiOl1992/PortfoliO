let modalBtn = document.getElementsByClassName("modal-btn");

let modalclose = document.getElementsByClassName("modal__close");

let modal = document.getElementsByClassName("modal");

for (let i = 0; i < modalBtn.length; i++) {
    let modalCall = modalBtn[i].getAttribute("data-modal");

    modalBtn[i].addEventListener("click", function () {

        event.preventDefault();
        let modalWindow = document.getElementById(modalCall.slice(1));

        document.body.classList.add("no-scroll")
        modalWindow.classList.add("show");

    })

}

for (let j = 0; j < modalclose.length; j++) {
    modalclose[j].addEventListener("click", function () {
        event.preventDefault();
        for (let i = 0; i < modal.length; i++) {
            modal[i].classList.remove("show")
            document.body.classList.remove("no-scroll")
        }
    })


}

for (let i = 0; i < modal.length; i++) {
    modal[i].addEventListener("click", function () {
        event.preventDefault();
        modal[i].classList.remove("show")
        document.body.classList.remove("no-scroll")
    })
    let modalDialog = modal[i].getElementsByClassName("modal__dialog");
    for (let j = 0; j < modalDialog.length; j++) {
        modalDialog[j].addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
        })
    }
}
