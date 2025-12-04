const animateModal = (modal) => {
    let opacity = 0;
    modal.style.display = 'block';
    modal.style.opacity = opacity;


    const fadeIn = () => {
        if (opacity < 1) {
            opacity += 0.05;
            modal.style.opacity = opacity;
            requestAnimationFrame(fadeIn);
        } else {
            modal.style.opacity = 1;
        }
    }
    fadeIn();
}

const animateNumber = (element, start, end, duration = 500) => {
    const startTime = performance.now();

    const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const value = Math.floor(start + (end - start) * progress);
        element.textContent = value;

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    };

    requestAnimationFrame(step);
};

export { animateModal, animateNumber };
