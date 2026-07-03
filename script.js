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

        alert("Thank you! Your coffee has been reserved.");

        coffeeForm.reset();

        closeCoffeeModal();

    }).catch(function(error){

        alert("Something went wrong. Please try again.");

        console.error(error);

    });

});
