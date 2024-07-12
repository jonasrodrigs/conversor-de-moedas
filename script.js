const buttoncurrency = document.querySelector('.button');
const currencyselect = document.querySelector('.select-currency');

function convertValue() {
    const inputcurrecyvalue = parseFloat(document.querySelector('.input').value); // Convertendo para número
    const valuers = document.querySelector('.value-rs');
    const valueus = document.querySelector('.valor-us');

    const dolartoday = 5.2;
    const eurotoday = 6.2;
    const libratoday = 7.5;
    const bitcons = 313.240;

    valuers.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputcurrecyvalue);

    if (currencyselect.value === 'dolar') {
        valueus.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputcurrecyvalue / dolartoday);
    }

    if (currencyselect.value === 'euro') {
        valueus.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputcurrecyvalue / eurotoday);
    }

    if (currencyselect.value === 'libra') {
        valueus.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
        }).format(inputcurrecyvalue / libratoday);
    }

    if (currencyselect.value === 'bitcoin') {
        valueus.innerHTML = new Intl.NumberFormat('en-US', {

            style: 'currency',
            currency: 'BTC'

        }).format(inputcurrecyvalue / bitcons)
    }


}

function changecurrency() {
    const currencyname = document.getElementById('currencyusd');
    const dolarimg = document.querySelector('.dolar-img');

    if (currencyselect.value === 'dolar') {

        currencyname.innerHTML = 'Dólar Americano';
        dolarimg.src = './assets/estados-unidos (1) 1.png'
    }



    if (currencyselect.value === 'euro') {

        currencyname.innerHTML = 'Euro';
        dolarimg.src = './assets/euro.png';
    }



    if (currencyselect.value === 'libra') {

        currencyname.innerHTML = 'libra';
        dolarimg.src = './assets/libra 1.png';
    }

    if (currencyselect.value === 'bitcoin') {

        currencyname.innerHTML = 'bitcoin';
        dolarimg.src = './assets/bitcoin 1.png'

    }

    convertValue()

}





currencyselect.addEventListener('change', changecurrency);
buttoncurrency.addEventListener('click', convertValue);
