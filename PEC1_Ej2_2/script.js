const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const loader = document.getElementById("loader");

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

//Fetch exchange rate and update the DOM
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    const value_one = amountEl_one.value;
    const minValue = 0;

    if (value_one < minValue) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Can not be negative numbers!',
        }); 
        amountEl_one.value = 0;
    } else {
        loader.classList.remove('notDisplay');

        fetch(`https://v6.exchangerate-api.com/v6/8e88f9eac7e9effc0a5776ce/latest/${currency_one}`)
            .then(res => res.json())
            .then(data => {
                const rate = data.conversion_rates[currency_two];

                rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

                //The .toFixed(2) => only with 2 decimals
                amountEl_two.value = (value_one * rate).toFixed(2);

                loader.classList.add('notDisplay');
            }).catch(error => {
                loader.classList.add('notDisplay');
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    html: '<h3>Something went wrong! </h3>'
                        + `${error}`,
                })
            });
    }

}

//Event listener
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value
    currencyEl_two.value = temp;

    calculate();
})

calculate();