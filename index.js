var readlineSync = require('readline-sync');
var introduction = readlineSync.question("Hello user! can we know your name? ");
console.log("Welcome " + introduction);

var score = 0;
var highscores = [
  {
    name: "Aasim",
    score: 5
  },
  {
    name: "Saad",
    score: 4,
  },
  {
    name: "Sabit",
    score: 4
  },
]
function showScores() {
  console.log("Check out highscores, if you beat these send me a ss to be on the list.");
  highscores.map(score =>
    console.log(score.name, ' : ', score.score))
}
function game(Q1, A1) {
  var answer = readlineSync.question(Q1);
  if (answer === A1) {
    score++;
    console.log("you're right! you get a point");
    console.log("-------------------------");
  }
  else {
    console.log("wrong answer!!");
    console.log("-------------------------");
  }
}

function intro(Q1, A1) {
  var userAns = readlineSync.question(Q1);
  if (userAns === A1) {
    console.log("-------------------------")
    console.log("lets start your game... ")
    var topic = readlineSync.question("Choose one Universe: " + " a. Marvel " + " b. DC ");
    console.log("-------------------------");
    if (topic === 'a') {
      console.log("Oh so you're a Marvel Fan ")
      game("what is the name of spiderman? a.peter parker  b.harry osborn c.tony stark  ", "a");
      game("what role did Oscar Issac play in phase 4 of Marvel? a.Falcon b.Moonknight  c.Groot ", "b");
      game("how many doctor strange movies have been produced? a.1  b.2  c.3  ", "b");
      game("what latest technology is introduced in the iron man suit a.Nano tech  b.rockets  c.web blasters  ", "a");
      game("is dr. stephen strange married?  a.yes  b.maybe  c.no  ", "c")
      console.log("Your final score is " + score + " points.")
    }
    if (topic === 'b') {
      console.log("Oh so you're a DC Fan");
      game("who is Clark Kent? a.Superman b.Batman c.Flash d.AquaMan  ", "a");
      game("who is not a Batman? a.Ben Affleck b.Henry Cavil c.Christian Bale d.Robert Pattinson  ", "b");
      game("How many seasons of CW the Flash have aired?  a.5 b.10 c.8 d.6 ", "c");
      game("In Batman vs Superman 2016 who's the villain?  a.Batman b.Superman c.Lex Luthor d.Joker  ", "c");
      game("what planet does Superman belong to? a.Earth b.Mars c.Krypton d.Titan  ", "c")
      console.log("Your final score is " + score + " points.")
    }
    showScores()
  }
  else {
    console.log("have a great day ahead...")
  }
}

intro("Would you like to play a Quiz Game? yes/no ", "yes")
