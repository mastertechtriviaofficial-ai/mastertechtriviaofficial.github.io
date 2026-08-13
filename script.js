/* =================================
   MOBILE MENU
================================= */

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    if (menu) {
        menu.classList.toggle("show");
    }

}


/* =================================
   CURRENT YEAR
================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* =================================
   CAR DETAILS MESSAGE
================================= */

function showMessage(carName) {

    alert(
        "You selected: " +
        carName +
        "\n\nPlease contact Dimple Motors for more information."
    );

}


/* =================================
   CONTACT FORM
================================= */

function submitForm(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "!\n\nYour message has been received."
    );

    event.target.reset();

}


/* =================================
   CLOSE MOBILE MENU AFTER CLICK
================================= */

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        const menu = document.querySelector(".nav-links");

        if (menu) {
            menu.classList.remove("show");
        }

    });

});
