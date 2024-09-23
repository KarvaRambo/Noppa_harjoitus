document.addEventListener('DOMContentLoaded', (event) => {
    const dice = document.getElementById('dice');
    const diceImage = dice.querySelector('img');

    dice.addEventListener('click', () => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        diceImage.src = `/img/d${randomNumber}.png`;
    });
});
