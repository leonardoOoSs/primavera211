function animateButterfly(butterfly) {
    const startX = parseInt(butterfly.style.left);
    const startY = parseInt(butterfly.style.top);
    const deltaX = Math.random() * 100 - 50; // Movimiento horizontal aleatorio
    const deltaY = Math.random() * 100 - 50; // Movimiento vertical aleatorio

    let progress = 0;
    function step() {
        progress += 0.01; // Velocidad de vuelo
        const newX = startX + deltaX * Math.sin(progress);
        const newY = startY + deltaY * Math.sin(progress);
        butterfly.style.transform = `translate(${newX}px, ${newY}px) rotate(${progress * 360}deg)`;

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}

function createButterflies() {
    for (let i = 0; i < 5; i++) {
        const butterfly = document.createElement('div');
        butterfly.classList.add('butterfly');
        butterfly.style.top = Math.random() * 50 + 'vh';
        butterfly.style.left = Math.random() * 100 + 'vw';
        
        // Crear alas, cuerpo y antenas (igual que antes)
        const leftWing = document.createElement('div');
        leftWing.classList.add('wing', 'left');
        butterfly.appendChild(leftWing);

        const rightWing = document.createElement('div');
        rightWing.classList.add('wing', 'right');
        butterfly.appendChild(rightWing);

        const body = document.createElement('div');
        body.classList.add('body');
        butterfly.appendChild(body);

        const antennaLeft = document.createElement('div');
        antennaLeft.classList.add('antenna', 'left');
        butterfly.appendChild(antennaLeft);

        const antennaRight = document.createElement('div');
        antennaRight.classList.add('antenna', 'right');
        butterfly.appendChild(antennaRight);

        document.body.appendChild(butterfly);
        animateButterfly(butterfly);
    }
}

}
