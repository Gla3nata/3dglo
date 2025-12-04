    const animate = (modal) => {
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
    export { animate }
;