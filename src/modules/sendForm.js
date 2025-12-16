const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка'
    const errorText = 'Ошибка'
    const successText = 'Спасибо. Наш менеджер свяжется с Вами!'


    const validate = (list) => {
        let success = true

        // list.forEach(input => {
        //     if (!input.classList.contains('success')) {
        //         success = false
        //     }
        // })
        return success
    }

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

        statusBlock.textContent = loadText
        form.append(statusBlock)

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
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText
                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            alert('заполнить данные')
        }
    }

    const checkTextInputs = () => {
        const phoneInputs = form.querySelectorAll('input[name="user_phone"]');
        const nameInputs = form.querySelectorAll('input[name="user_name"]');
        const messageInputs = form.querySelectorAll('[name="user_message"]');

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