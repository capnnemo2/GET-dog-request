'use strict';

$(function() {
    console.log('App loaded. Waiting for submit.');
    watchForm();
});

function watchForm() {
    $('#dog-num').submit(event => {
        event.preventDefault();
        let userNumInput = $('#numDogs').val();
        $('.results').empty();
        getDogImages(userNumInput);
    });
}

function getDogImages(n) {
        fetch(`https://dog.ceo/api/breeds/image/random/${n}`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert("Apologies, one of the puppies had an accident and we're cleaning it up. Please try again in a few moments."));
    
}

function displayResults(responseJson) {
    console.log(responseJson.message);
    responseJson.message.forEach(element => {
        $('.results').append(`<img src="${element}" class="results">`);
    })
    $('.results').removeClass('hidden');
}