const valid = () => {
    const forms = document.querySelectorAll('form')
    forms.forEach(form => {
        const textInputs = form.querySelectorAll('input[type="text"][placeholder="Ваше имя"], textarea[placeholder="Ваше сообщение"]')
        const emailInputs = form.querySelectorAll('input[type="email"]')
        const telInputs = form.querySelectorAll('input[type="tel"]')

        textInputs.forEach(input => {
            input.addEventListener('input', () => {
                input.value = input.value.replace(/[^а-яёА-ЯЁ -]/g, '');
            });
        });

        emailInputs.forEach(input => {
            input.addEventListener('input', () => {
                input.value = input.value.replace(/[^a-zA-Z0-9@\\-_.!~*']/g, '')
            });
        })
    
        telInputs.forEach(input => {
            input.addEventListener('input', () => {
                input.value = input.value.replace(/[^0-9()\\-]/g, '');
            });
        })
    })
}
export default valid