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

    product: "Coffee",
    item: modalType.textContent,
    price: modalPrice.textContent,
    grind: this.grind.value,
    date: "-",
    collection: this.collection.value,
    name: this.name.value,
    email: this.email.value

}

        ).then(() => {

            coffeeForm.reset();

            closeCoffeeModal();

alert("SUCCESS");

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

// ========================================
// CAKE SWITCHER
// ========================================

const cakeData = {

    basque: {
        title: "Basque Cheesecake",
        description: "Creamy tonka-bean infused cheesecake with a beautifully caramelised top.",
        price: "45"
    },

    pistachio: {
        title: "Pistachio Cheesecake",
        description: "Rich baked cheesecake finished with pistachio cream.",
        price: "48"
    },

    chocolate: {
        title: "Argentinian Chocolate Cake",
        description: "Moist chocolate cake with silky chocolate ganache with a touch of dulce de leche.",
        price: "48"
    },

    orange: {
        title: "Orange Almond (GF)",
        description: "Juicy gluten-free orange and almond cake.",
        price: "45"
    },

    napoleon: {
        title: "Napoleon",
        description: "Millefeuille handcrafted in collaboration with House of Napoleon.",
        price: "45"
    }

};

const cakeButtons = document.querySelectorAll(".cake-option");

if (cakeButtons.length) {

    const cakeTitle = document.getElementById("cake-title");
    const cakeDescription = document.getElementById("cake-description");
    const cakePrice = document.getElementById("cake-price");
    const orderButton = document.getElementById("cake-order");

    cakeButtons.forEach(button => {

        button.addEventListener("click", function(){

            cakeButtons.forEach(btn => btn.classList.remove("active"));

            this.classList.add("active");

            const cake = cakeData[this.dataset.cake];

            cakeTitle.textContent = cake.title;
            cakeDescription.textContent = cake.description;
            cakePrice.textContent = "€" + cake.price;

            orderButton.dataset.cake = cake.title;
            orderButton.dataset.price = cake.price;

        });

    });

}

// ========================================
// CAKE MODAL
// ========================================

const cakeModal = document.getElementById("cakeModal");

if (cakeModal) {

    const cakeOrderButton = document.getElementById("cake-order");

    const modalCake = document.getElementById("modalCake");
    const modalCakePrice = document.getElementById("modalCakePrice");

    const cakeCloseButton = cakeModal.querySelector(".cake-modal-close");

    function closeCakeModal(){

        cakeModal.classList.remove("active");

        document.body.style.overflow = "";

    }

    cakeOrderButton.addEventListener("click", function(e){

        e.preventDefault();

        modalCake.textContent = this.dataset.cake;
        modalCakePrice.textContent = this.dataset.price;

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

}

// ========================================
// CAKE FORM
// ========================================

const cakeForm = document.getElementById("cakeOrderForm");

if (cakeForm) {

    cakeForm.addEventListener("submit", function(e){

        e.preventDefault();

        emailjs.send(

            "service_98nz6ws",
            "template_xi0oi9e",

            {

                product: "Cake",
                item: document.getElementById("modalCake").textContent,
                price: document.getElementById("modalCakePrice").textContent,
                grind: "-",
                date: this.date.value,
                collection: this.collection.value,
                name: this.name.value,
                email: this.email.value

            }

        ).then(() => {

            cakeForm.reset();

            cakeModal.classList.remove("active");

            document.body.style.overflow = "";

            document.getElementById("successTitle").textContent =
                "Cake Order Received";

            document.getElementById("successText").textContent =
                "Thank you! We've received your cake order. We'll contact you shortly with payment instructions and confirm your collection date.";

            successModal.classList.add("active");

        }).catch((error) => {

            alert("Something went wrong. Please try again.");

            console.error(error);

        });

    });

}
