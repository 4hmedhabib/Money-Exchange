const currency = {
    'SLSH': 8400,
}

console.log(currency.SLSH)

const amountCurrency = document.querySelector('#from');
const btnConverter = document.querySelector('#convert');
const option1 = document.querySelector('#base')
const option2 = document.querySelector('#second')
const resultCurrency = document.querySelector('#result');


function convertToCurrency(from, baseType, secondType) {
    const fromCrr = from.value;
    const base = baseType.value;
    const second = secondType.value;

    if (fromCrr && base && second !== null || '') {
        let result;
        if (base === second) {
            alert('Fadlan Kala Badal Sarifka')
        } else {
            if (base == 'USD' && second === 'SLSH') {

                result = fromCrr * currency.SLSH;
                resultCurrency.innerHTML = `<p> SLSH ${result} </p>`

            } else if (base === 'SLSH' && second === 'USD') {
                let formula = fromCrr / currency.SLSH;
                result = formula.toFixed(2);
                resultCurrency.innerHTML = `<p> $ ${result} </p>`
            }
        }
    } else {
        alert('Fadlan Gali Lacagta');
    }
}





btnConverter.addEventListener('click', () => {
    convertToCurrency(amountCurrency, option1, option2)
})