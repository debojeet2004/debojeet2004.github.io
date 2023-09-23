document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab_button");
    const tabContents = document.querySelectorAll(".tab_content");

    // Add click event listeners to tab buttons
    tabButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const tabId = this.getAttribute("data-tab");

            // Hide all tab contents
            tabContents.forEach(function (content) {
                content.classList.remove("active");
            });

            // Show the selected tab content
            document.getElementById(tabId).classList.add("active");

            // Update the active tab button
            tabButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });
            this.classList.add("active");
        });
    });

    // Initially, display the first tab
    tabButtons[0].click();
});
