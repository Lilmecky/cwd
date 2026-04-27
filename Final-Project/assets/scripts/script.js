// Select back to top button
const topButton =
    document.getElementById("topBtn");


// Show button after scrolling
window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 500) {
            topButton.style.display = "block";
        }

        else {
            topButton.style.display = "none";
        }

    }
);


// Smooth scroll back to top
topButton.addEventListener(
    "click",
    function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);