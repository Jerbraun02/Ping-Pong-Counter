const total1 = document.querySelector('#p1Display');
const total2 = document.querySelector('#p2Display');
const player1button = document.querySelector('#p1Button');
const player2button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
const roundsCount = document.querySelector('#roundsCount');
const nextRoundButton = document.querySelector('#nextRound');

let p1score = 0;
let p2score = 0;
let winningScore = 3;
let isRoundOver = false;
let p1RoundsWon = 0;
let p2RoundsWon = 0;
let roundsCountNeeded = 1;
let isGameOver = false;
let winner = 0;

player1button.addEventListener('click', () => {
    if(!isGameOver){
        if(!isRoundOver){
            if(p1score !== winningScore){
                p1score += 1;
            if(p1score === winningScore){
                isRoundOver = true;
                total1.classList.add('has-text-success');
                total2.classList.add('has-text-danger');
                player1button.disabled = true;
                player2button.disabled = true;
                p1RoundsWon += 1;
                isRoundOver = true;
            }
            total1.textContent = p1score;
            }
            if(p1RoundsWon === roundsCountNeeded){
                isGameOver = true;
                nextRoundButton.disabled = true;
            }
        }
    }
});

player2button.addEventListener('click', () => {
    if(!isGameOver){
        if(!isRoundOver){
            if(p2score !== winningScore){
                p2score += 1;
            if(p2score === winningScore){
                isRoundOver = true; 
                total2.classList.add('has-text-success');
                total1.classList.add('has-text-danger');
                player1button.disabled = true;
                player2button.disabled = true;
                p2RoundsWon += 1;
                isRoundOver = true;
            }
            total2.textContent = p2score;
            }
            if(p2RoundsWon === roundsCountNeeded){
                isGameOver = true;
                nextRoundButton.disabled = true;
            }
        }
    }
});

resetButton.addEventListener('click', reset);

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
});

roundsCount.addEventListener('change', function() {
    roundsCountNeeded = parseInt(this.value);
    reset();
});

nextRoundButton.addEventListener('click', function(){
    if(isGameOver === false && p1score === winningScore || isGameOver === false && p2score === winningScore){
        partialReset();
    }
});

function reset(){
    p2score = 0;
    p1score = 0;
    total2.textContent = p2score;
    total1.textContent = p1score;
    isRoundOver = false;
    total1.classList.remove('has-text-success', 'has-text-danger');
    total2.classList.remove('has-text-success', 'has-text-danger');
    player1button.disabled = false;
    player2button.disabled = false;
    nextRoundButton.disabled = false;   
    p1RoundsWon = 0;
    p2RoundsWon = 0;
    isGameOver = false;
}

function partialReset(){
    p2score = 0;
    p1score = 0;
    total2.textContent = p2score;
    total1.textContent = p1score;
    isRoundOver = false;
    total1.classList.remove('has-text-success', 'has-text-danger');
    total2.classList.remove('has-text-success', 'has-text-danger');
    player1button.disabled = false;
    player2button.disabled = false;
}
