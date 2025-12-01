const calc = (price = 100) => {
    const calcInputs = document.querySelectorAll('.calc-block input')
    const calcBlock = document.querySelector('.calc-block')
    const calcType = document.querySelector('.calc-type')
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')
    const total = document.getElementById('total')
    let currentTotal = 0;


    calcInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d]/g, '')
            if (e.target.value.length > 1 && e.target.value[0] === '0') {
                e.target.value = e.target.value.substring(1)
            }
        })
    });


    const animateTotal = (start, end, duration = 500) => {
        const startTime = performance.now();


        const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const value = Math.floor(start + (end - start) * progress);
            total.textContent = value;


            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                currentTotal = end;
            }
        };


        requestAnimationFrame(step);
    };


    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        const calcSquareValue = calcSquare.value


        let totalValue = 0
        let calcCountValue = 1
        let calcDayValue = 1


        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10
        }


        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5
        }


        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0
        }


        const start = currentTotal;
        const end = totalValue;


        if (start === end) {
            total.textContent = end;
            return;
        }


        animateTotal(start, end);
    }
    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            countCalc()
        }


    })
}


export default calc;