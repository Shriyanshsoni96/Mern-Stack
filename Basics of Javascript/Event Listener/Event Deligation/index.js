const cart = document.querySelector("#cart");

cart.addEventListener("click", function(event) {

    if (event.target.classList.contains("remove")) {
        event.target.parentElement.remove();
    }

});