/* --- JAVASCRIPT AJUSTADO (Colocar dentro de <script>) --- */

document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const stage = document.getElementById('stage');
    const readingView = document.getElementById('reading-view');
    const closeBtn = document.getElementById('close-btn');
    const starfield = document.getElementById('starfield');
    let isAnimating = false;

    envelope.addEventListener('click', () => {
        if (isAnimating) return; 
        isAnimating = true;

        // Inicia la animación del sobre
        envelope.classList.add('is-opening');

        // AJUSTE DE TIEMPO CLAVE:
        // Esperamos 500ms (lo que tarda la solapa + la carta en salir un poco)
        // antes de mostrar la carta completa, en lugar de 1000ms.
        setTimeout(() => {
            stage.classList.add('is-background');
            readingView.classList.add('is-visible');
            isAnimating = false;
        }, 500); // Antes: 1000
    });

    closeBtn.addEventListener('click', () => {
        if (isAnimating) return; 
        isAnimating = true;

        readingView.classList.remove('is-visible');
        stage.classList.remove('is-background');

        // Reducimos también el tiempo de espera al cerrar para que sea más ágil
        setTimeout(() => {
            envelope.classList.remove('is-opening');
            isAnimating = false;
        }, 500); // Antes: 900
    });

    // Función de estrellas (sin cambios, no afecta la velocidad de la carta)
    const createStars = () => {
        const starCount = window.innerWidth < 768 ? 120 : 280;
        for (let i = 0; i < starCount; i++) {
            let star = document.createElement('div');
            star.className = 'star';
            let size = Math.random() > 0.8 ? (Math.random() * 2.5 + 1.5) : (Math.random() * 1.5 + 0.5);
            star.style.width = `${size}px`; 
            star.style.height = `${size}px`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.setProperty('--twinkle-dur', `${Math.random() * 3 + 1.5}s`);
            star.style.animationDelay = `${Math.random() * 5}s`;
            const colorChance = Math.random();
            if (colorChance > 0.9) star.style.backgroundColor = '#bae6fd';
            else if (colorChance > 0.8) star.style.backgroundColor = '#fbcfe8'; 
            starfield.appendChild(star);
        }
    };
    createStars();
});
