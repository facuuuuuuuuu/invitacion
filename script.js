// Añadir pequeños efectos interactivos
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    const spotlight = document.querySelector('.spotlight');

    // Efecto de brillo en el título al pasar el mouse
    title.addEventListener('mouseover', () => {
        title.style.textShadow = '0px 0px 20px rgba(255,215,0,0.8)';
    });

    title.addEventListener('mouseout', () => {
        title.style.textShadow = '2px 2px 5px rgba(0,0,0,0.7)';
    });

    // Movimiento del fondo de luz según el ratón
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth * 100;
        const y = e.clientY / window.innerHeight * 100;
        spotlight.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.15), rgba(0,0,0,0.9))`;
    });
});


