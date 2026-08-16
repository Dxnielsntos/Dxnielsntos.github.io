document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const stage = document.getElementById('stage');
    const readingView = document.getElementById('reading-view');
    const closeBtn = document.getElementById('close-btn');
    
    // Motor de estrellas en Canvas
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d', { alpha: true });
    let isAnimating = false;
    let stars = [];

    const initCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        stars = [];
        const starCount = window.innerWidth < 768 ? 120 : 280;
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                baseSize: Math.random() > 0.8 ? (Math.random() * 2.5 + 1.5) : (Math.random() * 1.5 + 0.5),
                color: Math.random() > 0.9 ? '#bae6fd' : (Math.random() > 0.8 ? '#fbcfe8' : '#ffffff'),
                twinkleSpeed: Math.random() * 0.002 + 0.001,
                timeOffset: Math.random() * Math.PI * 2
            });
        }
    };

    const drawStars = (time) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let star of stars) {
            const twinkle = (Math.sin(time * star.twinkleSpeed + star.timeOffset) + 1) / 2;
            const currentSize = star.baseSize * (0.5 + 0.7 * twinkle); 
            const currentOpacity = 0.1 + 0.9 * twinkle;
            
            ctx.globalAlpha = currentOpacity;
            ctx.fillStyle = star.color;
            ctx.beginPath();
            ctx.arc(star.x, star.y, currentSize / 2, 0, Math.PI * 2);
            ctx.fill();
        }
        requestAnimationFrame(drawStars);
    };

    window.addEventListener('resize', initCanvas);
    initCanvas();
    requestAnimationFrame(drawStars);

    // LÓGICA DE APERTURA: Tiempos sincronizados
    envelope.addEventListener('click', () => {
        if (isAnimating) return; 
        isAnimating = true;
        envelope.classList.add('is-opening');
        
        // Empata perfecto cuando el papel llega arriba (850ms)
        setTimeout(() => {
            stage.classList.add('is-background');
            readingView.classList.add('is-visible');
            
            setTimeout(() => { isAnimating = false; }, 1000);
        }, 850); 
    });

    // LÓGICA DE CIERRE: Tiempos sincronizados
    closeBtn.addEventListener('click', () => {
        if (isAnimating) return; 
        isAnimating = true;
        readingView.classList.remove('is-visible');
        stage.classList.remove('is-background');
        
        // Permite ver cómo el papel regresa al sobre (600ms)
        setTimeout(() => {
            envelope.classList.remove('is-opening');
            
            setTimeout(() => { isAnimating = false; }, 1000);
        }, 600);
    });
});
