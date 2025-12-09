// Toggle sidebar menu
const menuIcon = document.querySelector('.icon-menu');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.sidebar-overlay');

if (menuIcon && sidebar) {
    menuIcon.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
    });
}

// Tutup sidebar ketika overlay diklik
if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    });
}

// Tutup sidebar ketika link diklik
const sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    });
});