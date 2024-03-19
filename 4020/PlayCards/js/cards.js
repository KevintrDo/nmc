
var cards = ["10C.jpg","10D.jpg","10H.jpg","10S.jpg","2C.jpg","2D.jpg","2H.jpg","2S.jpg","3C.jpg","3D.jpg","3H.jpg","3S.jpg","4C.jpg","4D.jpg","4H.jpg","4S.jpg","5C.jpg","5D.jpg","5H.jpg","5S.jpg","6C.jpg","6D.jpg","6H.jpg","6S.jpg","7C.jpg","7D.jpg","7H.jpg","7S.jpg","8C.jpg","8D.jpg","8H.jpg","8S.jpg","9C.jpg","9D.jpg","9H.jpg","9S.jpg","AC.jpg","AD.jpg","AH.jpg","AS.jpg","JC.jpg","JD.jpg","JH.jpg","JS.jpg","KC.jpg","KD.jpg","KH.jpg","KS.jpg","QC.jpg","QD.jpg","QH.jpg","QS.jpg"]

var storage = [];
for (var i = 0; i < cards.length; i++) {
    storage.push(cards[i]);
}

var deck = 0;

let deckOne = document.querySelector('#deckOne');
let deckTwo = document.querySelector('#deckTwo');
let deckpOne = document.querySelector('#deckpOne');
let deckpTwo = document.querySelector('#deckpTwo');
let shuffleOne = document.querySelector('#shuffleOne');
let shuffleTwo = document.querySelector('#shuffleTwo');
let hideOne = document.querySelector('#hideOne');
let hideTwo = document.querySelector('#hideTwo');
let resetCards = document.querySelector('#resetCards');

function shuffle(player) {
    if (cards.length >= 5) {
        player.innerHTML = "";
        for (var i = 0; i < 5; i++) {
            let outcome = Math.floor(Math.random() * cards.length);
            player.innerHTML += "<img src=cards/" + cards[outcome] + ">";
            cards.splice(outcome, 1);
            deck++
        }

        $(function() {
            $('img').draggable();
        })

        $('img').dblclick(function() {
            $(this).css("display", "none");
        })
    }
    else {
        player.innerHTML = "<p>Out of cards please reset the game!</p>";
    }
}

function addToDeck(player) {
    if (cards.length >= 5) {
        let outcome = Math.floor(Math.random() * cards.length);
        player.innerHTML += "<img src=cards/" + cards[outcome] + ">";
        cards.splice(outcome, 1);
        //removes cards//

        $(function() {
            $('img').draggable();
        })

        $('img').dblclick(function() {
            $(this).css("display", "none");
        })
    }
    else {
        player.innerHTML += "<p>5 cards per deck!</p>"
    }
}

function reset() {
    deckOne.innerHTML = "";
    deckTwo.innerHTML = "";
    cards = [];
    for (var i = 0; i < storage.length; i++) {
        cards.push(storage[i]);
    }   
}

function hideCards(player) {
  if (player.style.display === "none") {
    player.style.display = "block";
  } else {
    player.style.display = "none";
  }
}

shuffleOne.onclick = function () {
    shuffle(deckOne);
}
shuffleTwo.onclick = function () {
    shuffle(deckTwo);
}

deckpOne.onclick = function () {
    addToDeck(deckOne);
}
deckpTwo.onclick = function () {
    addToDeck(deckTwo);
}

hideOne.onclick = function () {
    hideCards(deckOne);
}
hideTwo.onclick = function () {
    hideCards(deckTwo);
}

resetCards.onclick = function () {
    reset();
}

