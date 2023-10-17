let letters = document.querySelectorAll('.letter');
let input = document.querySelector('#input');
/* Keyboard above */

let words = [
    "HAWKS", "CELTICS", "NETS", "HORNETS", "BULLS", "CAVALIERS",
    "MAVERICKS", "NUGGETS", "PISTONS", "WARRIORS", "ROCKETS",
    "PACERS", "CLIPPERS", "LAKERS", "GRIZZLIES", "HEAT", "BUCKS",
    "TIMBERWOLVES", "KNICKS", "THUNDER", "MAGIC", "SIXERS", "SUNS",
    "TRAILBLAZERS", "KINGS", "SPURS", "RAPTORS", "JAZZ", "WIZARDS"
];

let answer = ""; /* stores answer*/
let guessedLetters = [];/*stores guessed letters*/
let usedWords = []; /*stores used words*/

let tries = document.querySelector(".remaining");/* sotres remaining attempts*/
let wins = document.querySelector(".dubs");/*dsiplay win count*/
let losses = document.querySelector(".wrong");/*displays loss count*/

let winScore = 0; /* track wins*/
let lossScore = 0; /*track loss*/

/* controls keyboard */
function highlight(e) {
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].dataset.letter === e.key) {
            letters[i].classList.add("active");

            /*convert input to loweercase */
            answer = answer.toLowerCase();
            let curLet = letters[i];
            if (answer.includes(e.key)) {
                let results = [];
                letters[i].style.background = "green";

                /*used to find occurrences of the guesed letter*/
                function finder() {
                    let index = answer.indexOf(curLet.innerHTML);
                    while (index !== -1) {
                        results.push(index);
                        index = answer.indexOf(curLet.innerHTML, index + 1);
                    }
                    return results;
                }

                finder();
                results.forEach((result) =>
                    newWord.splice(result, 1, curLet.innerHTML)
                );
                unknown.innerHTML = newWord.join("");

                if (!unknown.innerHTML.includes("-") && tries.innerText > 0) {
                    winScore += 1;
                    wins.innerText = winScore;
                    input.classList.add("hidden");
                    unClick(e);
                    alert(`You Win! The word was ${answer}.`);
                }
            } else if (!answer.includes(e.key)) {
                if (letters[i].style.background !== "red") {
                    letters[i].style.background = "red";
                    tries.innerText -= 1;
                    if (tries.innerText < 1) {
                        lossScore += 1;
                        losses.innerText = lossScore;
                        input.classList.add("hidden");
                        unClick(e);
                        alert(`You Lose! The word was ${answer}.`);
                    }
                }
            }
        }
    }
}

/* function to handle unclick event */
function unClick(e) {
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].dataset.letter === e.key) {
            letters[i].classList.remove("active");
        }
        input.value = "";
    }
}

input.addEventListener("keydown", highlight);
input.addEventListener("keyup", unClick);

/*randomize the hidden word*/
function randomizeWord() {
    if (words.length === 0) {
        console.log(usedWords);
        words = usedWords;
        console.log(words);
        usedWords = [];
    }
    answer = words[Math.floor(Math.random() * words.length)];
    return answer;
}

let unknown = document.querySelector(".unknown");
let startBtn = document.querySelector(".start");
let blankWord = "";
let newWord = [];
let count = document.querySelector(".count");

/* create new team name to be guessed */
function createBlank() {
    clearBoardStyles();
    tries.innerText = 6;
    guessedLetters = [];
    randomizeWord();
    usedWords.push(answer);
    for (let i = 0; i < words.length; i++) {
        if (words[i] === answer) {
            words.splice(i, 1);
        }
    }
    blankWord = "";
    for (let i = 0; i < answer.length; i++) {
        blankWord += "-";
    }
    unknown.innerHTML = blankWord;

    newWord = blankWord.split("");
    count.innerText = answer.length;
}

/* "new game" button */
createBlank();
startBtn.addEventListener("click", createBlank);

function clearBoardStyles() {
    letters.forEach((letter) => {
        letter.style.background = "";
        letter.classList.remove("active");
        input.value = "";
        input.classList.remove("hidden");
    });
}
