const sidebarOpen = document.getElementById('sidebar-open');
const sidebarClose = document.getElementById('sidebar-close');
const sidebar = document.getElementById('sidebar');

sidebarOpen.addEventListener('click', () => {
    sidebar.classList.add('right-0');
    sidebar.classList.remove('-right-full')
})

sidebarClose.addEventListener('click', () => {
    sidebar.classList.add('-right-full');
    sidebar.classList.remove('right-0')
})