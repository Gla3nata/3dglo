const menu = () => {
     const menuBtn = document.querySelector('.menu')
     const menu = document.querySelector('menu')

     const handleMenu = () => {
          menu.classList.toggle('active-menu')
     }  
     menuBtn.addEventListener('click', handleMenu);

     menu.addEventListener('click', (e) => {
          if (e.target.closest('ul > li > a') || e.target.classList.contains('close-btn')
          ) {
               handleMenu();
          }

     })
}

export default menu;