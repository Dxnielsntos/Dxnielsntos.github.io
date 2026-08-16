# 💌 Una Carta para Ti - Galaxia de Corazones

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Despliegue](https://img.shields.io/badge/Despliegue-GitHub_Pages-2ea44f?style=for-the-badge&logo=github)

Una experiencia web interactiva, romántica y visualmente deslumbrante. Este proyecto simula la apertura de una carta sellada con cera que flota en un entorno espacial, combinando un diseño inmersivo con técnicas avanzadas de optimización web para garantizar **60 FPS estables** en cualquier dispositivo.

---

## ✨ Características Destacadas

### 🎨 Diseño Inmersivo (UI/UX)
El aspecto visual fue cuidadosamente diseñado para evocar un sentimiento cósmico y elegante:
*   **Planetas Realistas en SVG:** Renderizado avanzado con filtros nativos (`feTurbulence`, `feDisplacementMap`) para simular atmósferas, nubes oceánicas en la Tierra, tormentas en Júpiter y la superficie marciana.
*   **Sello de Cera 3D:** Efectos de iluminación especular y sombras dinámicas aplicadas directamente sobre vectores para un realismo táctil.
*   **Tipografía Elegante:** Uso estratégico de *Cormorant Garamond* para la prosa y *Great Vibes* para toques caligráficos y firmas.
*   **Animaciones Suaves:** Transiciones coreografiadas mediante curvas `cubic-bezier` para simular el peso real del papel al abrir el sobre.

### 🚀 Ingeniería de Rendimiento
El código está altamente optimizado para evitar cuellos de botella en la renderización del navegador (Reflow/Repaint), haciéndolo ultra-fluido en dispositivos móviles:
*   **Motor de Estrellas en Canvas 2D:** Se reemplazó el renderizado clásico de nodos DOM (cientos de `<div>`) por un lienzo de `<canvas>` gestionado con `requestAnimationFrame`, liberando drásticamente el consumo de memoria.
*   **Aceleración por Hardware (GPU):** Uso estricto de `transform: translate3d()` y la propiedad `will-change` para delegar el cálculo de las órbitas planetarias y la animación del sobre a la tarjeta gráfica.
*   **Filtros SVG Embebidos:** La carga de imágenes se reduce a cero al dibujar toda la complejidad planetaria directamente en el árbol SVG.

---

## 🛠️ Estructura del Proyecto

El proyecto se compone de un diseño monolítico o modular ligero que facilita su despliegue y edición:
- Animaciones CSS puras para la levitación del sobre y brillo de la carta.
- JavaScript encargado únicamente del renderizado estelar (Canvas) y la lógica de estados de apertura/cierre (manejo de clases CSS).

## 🚀 Despliegue Rápido

Este proyecto está listo para ser alojado de forma gratuita. Ideal para utilizar **GitHub Pages**:
1. Haz un *fork* o clona este repositorio.
2. Activa GitHub Pages desde los ajustes de tu repositorio apuntando a la rama `main`.
3. ¡Comparte el enlace!

## 📝 Cómo Personalizar tu Carta

Puedes modificar fácilmente el contenido para adaptarlo a tu destinatario editando la sección `<div class="letter-body">` en el archivo principal:

1. **El Mensaje:** Cambia los párrafos con la clase `.prose`.
2. **La Firma:** Edita la parte final. Por defecto, el proyecto cierra de forma elegante con:
   ```html
   <p class="signature text-cosmic">Con amor,<br>Daniel</p>
