document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    const activeBar = document.createElement('div');
    activeBar.classList.add('active-bar');
    const nav = document.querySelector('nav');
    nav.appendChild(activeBar);

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            updateActiveBar(this);
        });
    });

    function updateActiveBar(clickedLink) {
        const linkRect = clickedLink.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();
        const leftOffset = linkRect.left - navRect.left;
        const width = linkRect.width;

        activeBar.style.left = `${leftOffset}px`;
        activeBar.style.width = `${width}px`;
    }

    // Set initial active bar position
    const firstLink = navLinks[0];
    updateActiveBar(firstLink);
});