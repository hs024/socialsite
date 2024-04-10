function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    const hamburgerIcon = document.querySelector('.icon');

    navUl.classList.toggle('active');

    // Toggle hamburger icon to cross icon
    hamburgerIcon.classList.toggle('cross');
}
