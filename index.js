const ecran = document.getElementById('ecran');
const effacer = document.getElementById('effacer');
const clear = document.getElementById('clear');
const egal = document.getElementById('egal');

const touches = ["(", ")", "+", "7", "8", "9", "-", "4", "5", "6", "*", "1", "2", "3", "/", ".", "0"];

document.addEventListener('click', (e) => {
    const value = e.target.getAttribute("aria-valuenow");
    
    if(touches.includes(value)) {
        ecran.textContent += value;
    }

    switch (value) {
        case "clear":
            ecran.textContent = "";
            break;

        case "egal":
            const resultat = Math.floor(eval(ecran.textContent) * 10000) / 10000;
            ecran.textContent = resultat;
            break;

        case "signe":
            const signe = ecran.textContent * -1;
            ecran.textContent = signe;

        default:
            break;
    }
})