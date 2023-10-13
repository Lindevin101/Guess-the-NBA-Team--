let letters = document.querySelectorAll (`.letter`);
let input = document.querySelector("#input");
/*keyboard above*/

let words = [
    "HAWKS", "CELTICS", "NETS", "HORNETS", "BULLS", "CAVALIERS",
    "MAVERICKS", "NUGGETS", "PISTONS", "WARRIORS", "ROCKETS",
    "PACERS", "CLIPPERS", "LAKERS", "GRIZZLIES", "HEAT", "BUCKS",
    "TIMBERWOLVES", "KNICKS", "THUNDER", "MAGIC", "SIXERS", "SUNS",
    "TRAILBLAZERS", "KINGS", "SPURS", "RAPTORS", "JAZZ", "WIZARDS"
];

let answer = "";
let guessedLetters = [];
let usedWords = []; 

let tries = document.querySelector(".remaining");
let wins = document.querySelector(".dubs");
let losses = document.querySelector(".wrong");

let winScore = 0;
let lossesScore = 0;

function highlight (e) {
    for (i = 0; i < letters.length; i++) {
        if (letters[i].dataset.letter == e.key){
            letters[i].classList.add("active");
            answer = answer.toLowerCase();
            let curLet = letters[i];
            if(answer.includes(e.key)) {
                let results = [];
                letters[i].computedStyleMap.background = "green"
                function finder() {
                    let index = asnwer.indexOf(curLet.interHTML)
                    while (index != -1){
                        results.push(index);
                        index = asnwer.indexOf(curLet.innerHTML, idex +1);
                    }
                    return results;
                }
                finder();
                results.forEach((result) =>
                newWord.splice(result, 1, curLet,innerHTML)
                );
                unknown.innerHTML = newWord.join("");
                if (!unknown.innerHTML.includes("-") && tries.innerText > 0) {
                    winScore += 1;
                    wins.innerText = winScore;
                    input.classList.add("hidden");
                    unClick(e);
                    alert(`YouWin! The word was ${answer}.`);
                }
            }else if (!answer.includes(e.key)) {
                if(letters[i].computedStyleMap.background !== "red"){
                    lerrers[i].style.background = "red";
                    tries.innerText -= 1;
                    if (tries.innerText < 1) {
                        lossScore += 1;
                        losses.innerText = lossScore;
                        input.classList.add("hidden");
                        unClick(e);
                        alert (`You Lose! The Word was ${answer}.`);
                    }
                }
            }
        }
    }
}
function unClick(e) {
    for (i = 0; i< letter.length; i++) {
        if(letters[i].dataset.letter == e.key){
            letters[i].classLet.remove("active");
        }
        input.value = "";
    }
}
