// Random Integer Generator

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var whiteCard = document.getElementById("white-card-text");
var blackCard = document.getElementById("black-card-text");
// Card Draw Function

function cardDraw() {
  // before you assign the random numbers to the array, put them into  
  var randomNumBlack = getRandomInt(0, questions.length -1);
  var qCard = questions[randomNumBlack];
  var qType = qCard[0];
  var qText = qCard[1];
  blackCard.innerHTML = qText;
  whiteCard.setAttribute("style", "font-size: large; text-align: left");
  if (qType == "cheekyQuestion") {
    var randomNumWhite = getRandomInt(0, straightAnswers.length -1);
    whiteCard.innerHTML = straightAnswers[randomNumWhite];
  } else {
    var randomNumWhite = getRandomInt(0,cheekyAnswers.length -1);
    whiteCard.innerHTML = cheekyAnswers[randomNumWhite];
  }
  var cardsHash = randomNumBlack.toString() + ":" + randomNumWhite.toString();
  window.location.hash = cardsHash;
  var tweetURI = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href);
  var tweetButton = document.getElementById("tweet-button");
  tweetButton.href = tweetURI;
}

// Card Draw Action

blackCard.onclick = cardDraw;
whiteCard.onclick = cardDraw;

var pattern = /^#(\d+):(\d+)$/;
var match = pattern.exec(window.location.hash);
if (match) {
  var blackNum = parseInt(match[1]);
  var whiteNum = parseInt(match[2]);

  var qCard = questions[blackNum];
  var qType = qCard[0];
  var qText = qCard[1];
  blackCard.innerHTML = qText;

  whiteCard.setAttribute("style", "font-size: large; text-align: left");
  if (qType == "cheekyQuestion") {
    whiteCard.innerHTML = straightAnswers[whiteNum];
  } else {
    whiteCard.innerHTML = cheekyAnswers[whiteNum];
  }
}

