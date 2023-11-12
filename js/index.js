function initializeNavbar() {
    const navToggle = document.querySelector('.nav--toggle');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
        });
    }
}

fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
        initializeNavbar(); // Initialize the event listener after the navbar is loaded
    });