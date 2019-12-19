'use strict';

$(function() {
    console.log('App loaded. Waiting for submit.');
    watchForm();
});

function watchForm() {
    $('#dog-num').submit(event => {
        event.preventDefault();
        let userNumInput = $('#numDogs').val();
        getDogImages(userNumInput);
    });
}

// n should go where the 3 is in the endpoint url
function getDogImages(n) {
        fetch(`https://dog.ceo/api/breeds/image/random/${n}`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
        .catch(error => alert("Apologies, one of the puppies had an accident and we're cleaning it up. Please try again in a few moments."));
    
}

// function displayResults(responseJson) {
//     console.log(responseJson.message);
//     $('.results-img').replaceWith(`<img src="${responseJson.message}" class="results-img">`);
//     $('.results-img').removeClass('hidden');
// }