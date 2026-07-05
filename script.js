emailjs.init({
    publicKey: "DidxJRtj3JlnRkMJ2"
});

// ========================================
// COFFEE ORDER MODAL
// ========================================

const coffeeModal = document.getElementById("coffeeModal");

const modalType = document.getElementById("modalType");
const modalPrice = document.getElementById("modalPrice");

const orderButtons = document.querySelectorAll(".order-coffee");

const closeModalButton = document.querySelector(".coffee-modal-close");

orderButtons.forEach(button => {

    button.addEventListener("click", function (e) {

        e.preventDefault();

        modalType.textContent = this.dataset.type;
        modalPrice.textContent = this.dataset.price;

        coffeeModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

closeModalButton.addEventListener("click", closeCoffeeModal);

coffeeModal.addEventListener("click", function (e) {

    if (e.target === coffeeModal) {

        closeCoffeeModal();

    }

});

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        closeCoffeeModal();

    }

});

function closeCoffeeModal() {

    coffeeModal.classList.remove("active");

    document.body.style.overflow = "";

}

const coffeeForm = document.getElementById("coffeeOrderForm");

coffeeForm.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.send(
        "service_98nz6ws",
        "template_xi0oi9e",
        {
            coffee: modalType.textContent,
            price: modalPrice.textContent,
            grind: this.grind.value,
            collection: this.collection.value,
            name: this.name.value,
            email: this.email.value
        }

  ).then(function(){

    coffeeForm.reset();

    closeCoffeeModal();

    document.getElementById("successModal")
        .classList.add("active");

}).catch(function(error){

    alert("Something went wrong. Please try again.");

    console.error(error);

});
    const successModal = document.getElementById("successModal");
const successClose = document.getElementById("successClose");

successClose.addEventListener("click", function(){

    successModal.classList.remove("active");

});

successModal.addEventListener("click", function(e){

    if(e.target === successModal){

        successModal.classList.remove("active");

    }

});


                            // ========================================
// CAKE ORDER MODAL
// ========================================

const cakeModal = document.getElementById("cakeModal");

if (cakeModal) {

    const cakeButton = document.getElementById("cake-order");
    const cakeCloseButton = cakeModal.querySelector(".coffee-modal-close");

    cakeButton.addEventListener("click", function(e){

        e.preventDefault();

        cakeModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

    cakeCloseButton.addEventListener("click", closeCakeModal);

    cakeModal.addEventListener("click", function(e){

        if(e.target === cakeModal){

            closeCakeModal();

        }

    });

    document.addEventListener("keydown", function(e){

        if(e.key === "Escape"){

            closeCakeModal();

        }

    });

    function closeCakeModal(){

        cakeModal.classList.remove("active");

        document.body.style.overflow = "";

    }

}
