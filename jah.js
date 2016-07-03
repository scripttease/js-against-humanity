// Random Integer Generator

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Card Draw Function

function cardDraw() {
  // before you assign the random numbers to the array, put them into  
  var randomNumBlack = getRandomInt(0, questions.length -1);
  var qCard = questions[randomNumBlack];
  var qType = qCard[0];
  var qText = qCard[1];
  document.getElementById("black-card-text").innerHTML = qText;
  var wct = document.getElementById("white-card-text");
  wct.setAttribute("style", "font-size: large; text-align: left");
  if (qType == "cheekyQuestion") {
    var randomNumWhite = getRandomInt(0, straightAnswers.length -1);
    wct.innerHTML = straightAnswers[randomNumWhite];
  } else {
    var randomNumWhite = getRandomInt(0,cheekyAnswers.length -1);
    wct.innerHTML = cheekyAnswers[randomNumWhite];
  }
  var cardsHash = randomNumBlack.toString() + ":" + randomNumWhite.toString();
  window.location.hash = cardsHash;
}

// Card Draw Action

document.getElementById("white-card-text").onclick = cardDraw;
document.getElementById("black-card-text").onclick = cardDraw;
