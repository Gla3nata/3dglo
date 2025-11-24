const calc = () => {
    const calcInputs = document.querySelectorAll('.calc-block input')
    calcInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d]/g, '')
            if (e.target.value.length > 1 && e.target.value[0] === '0') {
                e.target.value = e.target.value.substring(1)
            }
        })
    });
}

export default calc;