
const navType = performance.getEntriesByType("navigation")[0]?.type || performance.navigation.type;

if (navType === "reload" || navType === 1) {    
    const popup = document.createElement('div');
    popup.id = "audio_popup";
    popup.classList.add("recept");
    popup.textContent = '🔊 Click anywhere to enable sound';
    document.body.appendChild(popup);

    const removePopup = () => {
        popup.remove();
        window.removeEventListener('click', removePopup);
    };

    window.addEventListener('click', removePopup)
}