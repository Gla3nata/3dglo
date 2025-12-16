import timer from './modules/timer.js';
import menu from './modules/menu.js';
import modal from './modules/modal.js';
import calc from './modules/calc.js';
// import valid from './modules/valid.js';
import tabs from './modules/tabs.js';
import slider from './modules/slider.js';
import sendForm from './modules/sendForm.js';


timer('24 november 2025');
menu();
modal();
calc(100);
tabs();
// valid();
slider();
sendForm({
    formId: 'form1', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] });
