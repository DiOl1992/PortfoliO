let filter = document.getElementsByClassName("works__nav-link");
let portfolioCategory = document.getElementsByClassName("portfolio__col");


for (let i = 0; i < filter.length; i++) {
    let filterCategory = filter[i].getAttribute("data-filter");
    filter[i].addEventListener("click", function () {
        event.preventDefault();
        //        console.log(filtreCategory)
        for (let j = 0; j < portfolioCategory.length; j++) {
            if (filterCategory == "all") {
                portfolioCategory[j].classList.remove("hide");
            } else {
                let categoryPhoto = portfolioCategory[j].getAttribute("data-cat");
                if (categoryPhoto != filterCategory) {
                    portfolioCategory[j].classList.add("hide");
                } else {
                    portfolioCategory[j].classList.remove("hide");
                }
            }
        }

    })

}
