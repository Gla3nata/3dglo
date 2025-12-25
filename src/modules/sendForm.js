const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка'
    const errorText = 'Ошибка'
    const successText = 'Спасибо. Наш менеджер свяжется с Вами!'


    const validate = (inputs) => {
        let valid = true;

        inputs.forEach(input => {
            if (input.name === 'user_name' && input.value.trim().length < 2) {
                valid = false;
            }

            if (input.name === 'user_phone' && input.value.replace(/\D/g, '').length < 11) {
                valid = false;
            }

            if (input.type === 'email' && !/^\S+@\S+\.\S+$/.test(input.value)) {
                valid = false;
            }

            if (input.value.trim() === '') {
                valid = false;
            }
        });

        if (!valid) {
            alert('Заполните поля корректно');
        }

        return valid;
    };

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        // statusBlock.textContent = loadText
        // form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value
            }
        })

        console.log('submit');

        if (validate(formElements)) {
            statusBlock.textContent = loadText;
            form.append(statusBlock);

            sendData(formBody)
                .then(() => {
                    statusBlock.textContent = successText;

                    setTimeout(() => {
                        statusBlock.remove();
                    }, 3000);

                    formElements.forEach(input => input.value = '');
                })
                .catch(() => {
                    statusBlock.textContent = errorText;
                });
        }
    }

    const checkTextInputs = () => {
        const phoneInputs = form.querySelectorAll('input[name="user_phone"]');
        const nameInputs = form.querySelectorAll('input[name="user_name"]');
        const messageInputs = form.querySelectorAll('[name="user_message"]');
        const emailInputs = form.querySelectorAll('input[type="email"]');


        phoneInputs.forEach(input => {
            input.addEventListener('input', () => {
                input.value = input.value.replace(/[^0-9+()-]/g, '');
            });
        });

        nameInputs.forEach(input => {
            input.addEventListener('input', () => {
                input.value = input.value.replace(/[^А-Яа-яЁё\s]/g, '');
            });
        });

        messageInputs.forEach(input => {
            input.addEventListener('input', () => {
                input.value = input.value.replace(/[^А-Яа-яЁё\s0-9.,!?-]/g, '');
            });
        });
        emailInputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (!/^\S+@\S+\.\S+$/.test(input.value)) {
                    input.value = '';
                }
            });
        });
    };

    try {
        if (!form) {
            throw new Error('Верните форму на место')
        }
        checkTextInputs();
        form.addEventListener('submit', (event) => {
            event.preventDefault()

            submitForm()
        })
    } catch (error) {
        console.log(error.message)
    }
}
export default sendForm;