import {animateModal} from './helpers'

const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')

    const isMobile = window.innerWidth < 768

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (isMobile) {
                modal.style.display = 'block';
            } else {
                animateModal(modal);
            }
        });
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
            modal.style.opacity = '';
        }

    })
}

export default modal;