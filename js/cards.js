// -------------------------------
//  Show and hide tooltips
// -------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const tooltipsItems = Array.from(
        document.querySelectorAll(".cards__popup")
    );
    const tooltipsButtons = Array.from(
        document.querySelectorAll(".cards__item-button--show")
    );

    const closeAllTooltips = () => {
        tooltipsItems.map((item) => {
            if (item.classList.contains("cards__popup--active")) {
                item.classList.remove("cards__popup--active");
            }
        });
    };

    tooltipsButtons.map((button) => {
        button.addEventListener("click", () => {
            closeAllTooltips();

            // Get nearest tooltip
            let panel = button.parentElement.parentElement.nextElementSibling;


            // Show and hide tooltip
            panel.classList.toggle("cards__popup--active");

            // Close tooltip on close button click
            let close = button.parentElement.parentElement.nextElementSibling.firstElementChild;

            close.addEventListener("click", (e) => {
                e.preventDefault();

                if (panel.classList.contains("cards__popup--active")) {
                    panel.classList.remove("cards__popup--active");
                }
            });
        });
    });

    // Click outside tooltip
    document.addEventListener("click", (e) => {
        
        if (
            !e.target.classList.contains("cards__item-button--show") &&
            !e.target.classList.contains("cards__popup-close")
        ) {
            closeAllTooltips();
        }
    });
});