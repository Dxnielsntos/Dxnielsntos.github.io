// Seleccionamos los elementos de nuestra página
const envelope = document.getElementById('envelope');
const seal = document.getElementById('seal');
const letter = document.querySelector('.letter');

// Si tenías un efecto de sonido configurado antes, puedes agregarlo aquí.
// const paperSound = new Audio('tu-archivo-de-sonido.mp3'); 

// Cuando hagan clic en el sello de cera...
seal.addEventListener('click', () => {
    
    // Si tienes sonido, quítale las dos barras inclinadas (//) a la siguiente línea:
    // paperSound.play();
    
    // Paso 1: Abrir la solapa del sobre
    envelope.classList.add('open');

    // Paso 2: Esperar a que la carta suba y luego acercarla a la pantalla
    // Los 800 milisegundos coinciden perfecto con la animación de tu CSS
    setTimeout(() => {
        letter.classList.add('expanded');
    }, 800);
});

// Extra: Si hacen clic en la carta cuando ya está grande, se vuelve a guardar
letter.addEventListener('click', () => {
    if (letter.classList.contains('expanded')) {
        // Primero la alejamos
        letter.classList.remove('expanded');
        
        // Luego cerramos el sobre
        setTimeout(() => {
            envelope.classList.remove('open');
        }, 800);
    }
});
