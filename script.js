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
let losses = document.querySelector(".wrong")