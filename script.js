document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const stage = document.getElementById('stage');
    const readingView = document.getElementById('reading-view');
    const closeBtn = document.getElementById('close-btn');
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d', { alpha: true });
    
    let isAnimating = false;
    let stars = [];

    // Render loop eficiente para el fondo estelar
    const initCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        stars = [];
        const starCount = window.innerWidth < 768 ? 80 : 160;
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() > 0.85 ? (Math.random() * 2 + 1) : (Math.random() * 1.2 + 0.4),
                alpha: Math.random(),
                speed: Math.random() * 0.012 + 0.004,
                color: Math.random() > 0.85 ? '#bae6fd' : (Math.random() > 0.75 ? '#fbcfe8' : '#ffffff')
            });
        }
    };

    const drawStars = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < stars.length; i++) {
            const s = stars[i];
            s.alpha += s.speed;
            if (s.alpha > 1 || s.alpha < 0.2) s.speed = -s.speed;
            
            ctx.globalAlpha = Math.abs(s.alpha);
            ctx.fillStyle = s.color;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            ctx.fill();
        }
        requestAnimationFrame(drawStars);
    };

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(initCanvas, 200);
    });

    initCanvas();
    drawStars();

    // Eventos de apertura y cierre
    envelope.addEventListener('click', () => {
        if (isAnimating) return; 
        isAnimating = true;
        envelope.classList.add('is-opening');
        
        setTimeout(() => {
            stage.classList.add('is-background');
            readingView.classList.add('is-visible');
            isAnimating = false;
        }, 1000); 
    });

    closeBtn.addEventListener('click', () => {
        if (isAnimating) return; 
        isAnimating = true;
        readingView.classList.remove('is-visible');
        stage.classList.remove('is-background');
        
        setTimeout(() => {
            envelope.classList.remove('is-opening');
            isAnimating = false;
        }, 900);
    });
});