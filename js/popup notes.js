
/*
JS notes because im going to forget:

const = "constant variable", cannot be reassigned
let = "let me change this," reassignable later

append = add to the end
appendChild = add child element to the end of another child element
*/

const navType = performance.navigation.type; // assign "navType" variable to navtigation type

/* 
performace.navigation.type:
0 = navigate
1 = reload
2 = back/forward
255 = reserved
*/

if (navType === "reload" || navType === 1) { // if navtype = 1:
    const popup = document.createElement('div'); // "creatre" div element
    popup.id = "audio_popup"; // assign "audio_popup" id
    popup.classList.add("recept"); // add "recept" class
    popup.textContent = '🔊 Click anywhere to enable sound'; // change content
    document.body.appendChild(popup); // append

    const removePopup = () => { // define function "remove popup"
        popup.remove();  // remove popup
        window.removeEventListener('click', removePopup); // ignore clicks after popup removed
    };

    window.addEventListener('click', removePopup) // whenever user clicks, call "removePopup" function
}