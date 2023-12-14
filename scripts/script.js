let nums = document.querySelectorAll('.rating__nums p');
const resultElm = document.querySelector('.result');
const ratingState = document.querySelector('.rating-state');
const thankState = document.querySelector('.thank-state');
let selectedNum = 0;
nums.forEach(numElement => {
    numElement.addEventListener('click', (event) => {
        selectedNum = event.target.innerHTML;
        resultElm.innerHTML = `You selected ${selectedNum} out of 5`;
        ratingState.style.display = 'none';
        thankState.style.display = 'flex';
    })
});