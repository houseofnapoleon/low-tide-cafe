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
