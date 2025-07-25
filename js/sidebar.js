
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('hide'); sidebar.classList.add('show');
    sidebar.style.display = 'flex';
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('show');
    sidebar.classList.add('hide');

    sidebar.addEventListener('animationend', function handler() {
        sidebar.style.display = 'none';
        sidebar.removeEventListener('animationend', handler);
    });
}