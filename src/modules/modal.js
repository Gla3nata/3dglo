const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')

    const isMobile = window.innerWidth < 768
     const animateModal = () => {
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
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (isMobile) {
                modal.style.display = 'block';
            } else {
                animateModal();
            }
        });
    });
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
        modal.style.opacity = '';
    })
}

export default modal;