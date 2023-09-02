//Step 1 - selecting all the element
var intialprice = document.querySelector('#intial-price');
var stockQuantity = document.querySelector('#stocks-quanity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        // loss logic here
    } else if (current > initial) {
        // profit logic here
    } else {
        
    }
}