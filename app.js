const player1 = {
    score: 0,
    button: document.querySelector('#p1btn'),
    display: document.querySelector('#score1'),
}
const player2 = {
    score: 0,
    button: document.querySelector('#p2btn'),
    display: document.querySelector('#score2'),
}

const btn3 = document.querySelector('#reset');
const selectToWin = document.querySelector('#playing');

let isGameOver = false;
let winner = 3;

selectToWin.addEventListener('change', function() {
    winner = parseInt(this.value);
    reset();
})

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        player.display.textContent = player.score;
        if (player.score === winner) {
            isGameOver = true;
            player.display.classList.add('win');
            opponent.display.classList.add('lose');
        }
    }
}

function reset() {
    player1.display.textContent = 0;
    player1.score = 0;
    player2.display.textContent = 0;
    player2.score = 0;
    isGameOver = false;
    player1.display.classList.remove('win', 'lose');
    player2.display.classList.remove('win', 'lose');
}


player1.button.addEventListener('click', function() {
    updateScore(player1, player2);
});

player2.button.addEventListener('click', function() {
    updateScore(player2, player1);
});

btn3.addEventListener('click', reset);