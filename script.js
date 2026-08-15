document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const seal = document.getElementById('open-btn');
    const letter = document.getElementById('letter');
    const sound = document.getElementById('paper-sound');

    // Al hacer clic en el sello de cera
    seal.addEventListener('click', () => {
        // Reproducir sonido
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(e => console.log("Audio bloqueado temporalmente por el navegador."));
        }
        // Abrir el sobre
        envelope.classList.add('open');
    });

    // Al hacer clic en la carta (una vez que salió)
    letter.addEventListener('click', () => {
        // Solo agrandar si el sobre está abierto
        if (envelope.classList.contains('open')) {
            letter.classList.toggle('expanded');
        }
    });
});