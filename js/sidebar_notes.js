
function showSidebar() {
    const sidebar = document.querySelector('.sidebar'); // get sidebar element
    sidebar.classList.remove('hide'); // remove hiding animation class (if applied)
    sidebar.classList.add('show'); // add class to trigger slide-in animation
    sidebar.style.display = 'flex'; // make sure sidebar is visible and using flex layout
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar'); // get sidebar element
    sidebar.classList.remove('show'); // remove slide-in animation class
    sidebar.classList.add('hide'); // add class to trigger slide-out animation

    // after the slide-out animation ends...
    sidebar.addEventListener('animationend', function handler() {
        sidebar.style.display = 'none'; // hide the sidebar completely
        sidebar.removeEventListener('animationend', handler); // remove the listener to prevent stacking
    });
}
