const sendForm = ({formId , someElem = [] }) => {
    const form = document.getElementById(formId)

    const validate = (list) => {
        let success = true 

        list.forEach(input => {
            if (!input.classList.contains('success')) {
                success = false
            }
        })
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

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input'){
                formBody[elem.id] = element.value
            }
        })

        console.log('sub');

        if (validate(formElements)){
            sendData(formBody).then(data => {
            console.log(data);
        })
        } else{
            alert('заполнить данные')
        }

        
    })
}
export default sendForm;