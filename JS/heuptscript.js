document.addEventListener('DOMContentLoaded', () => {
    const div2 = document.querySelector('.div2');
    div2.addEventListener('click', () => {
        div2.classList.add('div2-animate');

        // Entfernt die Klasse nach Ende der Animation, um sie erneut auslösen zu können
        div2.addEventListener('animationend', () => {
            div2.classList.remove('div2-animate');
        });
    });
});

function matrixEffect(elementId, finalText) {
    const container = document.getElementById(elementId);
    let currentText = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const updateInterval = 100; // Geschwindigkeit der Buchstabenänderung
    let i = 0;

    const interval = setInterval(() => {
        if (i < finalText.length) {
            currentText += characters.charAt(Math.floor(Math.random() * characters.length));
            container.textContent = currentText;
            i++;
        } else if (i >= finalText.length && i < finalText.length * 2) {
            currentText = finalText.slice(0, i - finalText.length) + currentText.slice(1);
            container.textContent = currentText;
            i++;
        } else {
            clearInterval(interval);
            container.textContent = finalText; // Setzen des endgültigen Textes
        }
    }, updateInterval);
}

// Event Listener, um sicherzustellen, dass das Skript nach dem Laden der Seite ausgeführt wird
document.addEventListener('DOMContentLoaded', () => {
    matrixEffect('matrixContainer', 'WILLKOMMEN BEI HADERNER TROPHY');
});
