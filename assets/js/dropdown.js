const details = document.querySelectorAll(".dropdown");

details.forEach((el) => {
    const summary = el.querySelector("summary");
    const content = el.querySelector(".content");

    summary.addEventListener("click", (e) => {
        e.preventDefault(); // prevent instant jump-open

        if (el.open) {
            // closing
            content.style.maxHeight = content.scrollHeight + "px";
            requestAnimationFrame(() => {
                content.style.maxHeight = "0";
            });
            setTimeout(() => el.removeAttribute("open"), 350);
        } else {
            // opening
            el.setAttribute("open", "");
            content.style.maxHeight = content.scrollHeight + "px";
            content.addEventListener(
                "transitionend",
                () => (content.style.maxHeight = "none"),
                { once: true }
            );
        }
    });
});
