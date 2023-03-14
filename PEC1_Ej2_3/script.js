const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const currencySelect = document.getElementById("currency");
const loader = document.getElementById("loader");
const currency = document.getElementById("moneda");
const default_currency = "USD";

let current_currency = "";

populateUI();
// The + convert the string into a int
let ticketPrice = +movieSelect.value;

//Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {

    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);

}

function setCurrencyData() {

    localStorage.setItem('current_currency', current_currency);

}

//Update total and count
function updateSelectedCount() {

    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    //Copy selected seats into array
    //Map through array
    //return a new array indexes

    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));


    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = (selectedSeatsCount * ticketPrice).toFixed(2);
    currency.innerText = current_currency;

}

//Get data from localStorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }

    const currencyStored = localStorage.getItem('current_currency');

    if (currencyStored === null || currencyStored === "")
        current_currency = default_currency;
    else
        current_currency = currencyStored;

        currencySelect.value = current_currency;

    updateCurrency();



}

// Movie select event
movieSelect.addEventListener('change', (e) => {

    ticketPrice = +e.target.value;

    setMovieData(e.target.selectedIndex, e.target.value);

    // updateSelectedCount();
    updateCurrency();

})

// seat click event
container.addEventListener('click', (e) => {

    if (e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')) {
        //toggle: if is selected, remove it, otherwise add it
        e.target.classList.toggle("selected");

        updateSelectedCount();
    }

});

//Initial count and total set
updateSelectedCount();

//set change event
currencySelect.addEventListener('change', (e) => {

    updateCurrency();

});

function updateCurrency() {

    loader.classList.remove('notDisplay');

    let newCurrency = currencySelect.value;

    fetch(`https://v6.exchangerate-api.com/v6/8e88f9eac7e9effc0a5776ce/latest/${default_currency}`)
        .then(res => res.json())
        .then(data => {

            const rate = data.conversion_rates[newCurrency];

            const arrayMovies = [...movieSelect];

            current_currency = newCurrency;

            arrayMovies.forEach(element => {

                let priceFilm = element.value;

                let currentIndex = element.index;

                //The .toFixed(2) => only with 2 decimals
                let newPrice = (priceFilm * rate).toFixed(2);

                updatePricesMovies(currentIndex, newPrice, newCurrency);


            });

            setCurrencyData();

            loader.classList.add('notDisplay');
        }).catch(error => {
            loader.classList.add('notDisplay');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: '<h3>Something went wrong! </h3>'
                    + `${error}`,
            });

        });

}

function updatePricesMovies(index, price, currency) {

    let title = movieSelect[index].innerText;

    let titleAux = title.split('(');

    let newTitle = titleAux[0];

    newTitle += `(${price} ${currency})`;

    movieSelect[index].innerText = newTitle;

    if (movieSelect[index].selected) {
        ticketPrice = +price;
        updateSelectedCount();
    }


}
