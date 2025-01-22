const images = {
    start: {
        1: 'IMG/cultivo-planta-de-chile-habanero.jpg',
        2: 'IMG/chile habanero en PLENA PRODUCCIÓN.png',
        3: 'IMG/16oct12.-ANTIMIO-CB-05-FOTO-3-Invernader-os-Parque-Científico-CHILE-HABANERO.jpg',
        4: 'IMG/Habanero_in_Greenhouse_480x480.webp'
    },
    pause: {
        1: 'IMG/PU1.jpeg',
        2: 'IMG/PU2.jpeg',
        3: 'IMG/PU3.jpeg',
        4: 'IMG/PU4.jpeg'
    },
    cancel: {
        1: 'IMG/ng.jpg',
        2: 'IMG/ng.jpg',
        3: 'IMG/ng.jpg',
        4: 'IMG/ng.jpg'
    }
};

function hideAllStatusIndicators() {
    const indicators = document.querySelectorAll('.status-indicator');
    indicators.forEach(indicator => {
        indicator.style.display = 'none';
    });
}

function showStatusIndicator(className) {
    hideAllStatusIndicators();
    const indicators = document.querySelectorAll(`.${className}`);
    indicators.forEach(indicator => {
        indicator.style.display = 'flex';
    });
}

function startAllMonitoring() {
    for (let i = 1; i <= 4; i++) {
        const camera = document.getElementById(`camera${i}`);
        camera.style.display = 'block';
        camera.src = images.start[i];
    }
    showStatusIndicator('live-indicator');
    const status = document.querySelector('.monitoring-status');
    status.textContent = `Estado: Monitoreo activo`;
    status.style.background = '#dcfce7';
}

function pauseAllMonitoring() {
    for (let i = 1; i <= 4; i++) {
        const camera = document.getElementById(`camera${i}`);
        camera.style.display = 'block';
        camera.src = images.pause[i];
    }
    showStatusIndicator('pause-indicator');
    const status = document.querySelector('.monitoring-status');
    status.textContent = `Estado: Monitoreo pausado`;
    status.style.background = '#fef3c7';
}

function cancelAllMonitoring() {
    for (let i = 1; i <= 4; i++) {
        const camera = document.getElementById(`camera${i}`);
        camera.style.display = 'block';
        camera.src = images.cancel[i];
    }
    showStatusIndicator('cancel-indicator');
    const status = document.querySelector('.monitoring-status');
    status.textContent = `Estado: Monitoreo cancelado`;
    status.style.background = '#fee2e2';
}