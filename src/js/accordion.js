document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".accordion-title").forEach((item) => {
        item.addEventListener("click", () => {
            const parent = item.closest(".accordion-item");
            parent.classList.toggle("open");
        });
    });
});