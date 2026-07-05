// ========================================
// EMAILJS
// ========================================

emailjs.init({
    publicKey: "DidxJRtj3JlnRkMJ2"
});

// ========================================
// COFFEE MODAL
// ========================================

const coffeeModal = document.getElementById("coffeeModal");

if (coffeeModal) {

    const modalType = document.getElementById("modalType");
    const modalPrice = document.getElementById("modalPrice");

    const orderButtons = document.querySelectorAll(".order-coffee");

    const closeButton = coffeeModal.querySelector(".coffee-modal-close");

    function closeCoffeeModal() {

        coffeeModal.classList.remove("active");
        document.body.style.overflow = "";

    }

    orderButtons.forEach(button => {

        button.addEventListener("click", function(e){

            e.preventDefault();

            modalType.textContent = this.dataset.type;
            modalPrice.textContent = this.dataset.price;

            coffeeModal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });

    closeButton.addEventListener("click", closeCoffeeModal);

    coffeeModal.addEventListener("click", function(e){

        if(e.target === coffeeModal){

            closeCoffeeModal();

        }

    });

    document.addEventListener("keydown", function(e){

        if(e.key === "Escape"){

            closeCoffeeModal();

        }

    });

    // ========================================
    // COFFEE FORM
    // ========================================

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

        ).then(() => {

            coffeeForm.reset();

            closeCoffeeModal();

            successModal.classList.add("active");

        }).catch((error) => {

            alert("Something went wrong. Please try again.");

            console.error(error);

        });

    });

}

// ========================================
// SUCCESS MODAL
// ========================================

const successModal = document.getElementById("successModal");

if (successModal) {

    const successClose = document.getElementById("successClose");

    successClose.addEventListener("click", function(){

        successModal.classList.remove("active");

    });

    successModal.addEventListener("click", function(e){

        if(e.target === successModal){

            successModal.classList.remove("active");

        }

    });

}
