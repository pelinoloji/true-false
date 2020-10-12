const quizeList = [
  {
    question:
      "Cyclones spin in a clockwise direction in the southern hemisphere",
    index: 1,
    answer: "True",
  },
  {
    question: "Goldfish only have a memory of three seconds",
    index: 2,
    answer: "False",
  },
  { question: "The capital of Libya is Benghazi", index: 3, answer: "False" },
  {
    question: "  Dolly Parton is the godmother of Miley Cyrus",
    index: 4,
    answer: "True",
  },
  {
    question: "Roger Federer has won the most Wimbledon titles of any player",
    index: 5,
    answer: "False",
  },
  {
    question: "An octopus has five hearts",
    index: 6,
    answer: "False",
  },
  {
    question:
      "Brazil is the only country in the Americas to have the official language of Portuguese ",
    index: 7,
    answer: "True",
  },
  {
    question: "The Channel Tunnel is the longest rail tunnel in the world ",
    index: 8,
    answer: "False",
  },
  {
    question:
      "Darth Vader famously says the line “Luke, I am your father” in The Empire Strikes Back ",
    index: 9,
    answer: "False",
  },
  {
    question:
      "Olivia Newton-John represented the UK in the Eurovision Song Contest in 1974, the year ABBA won with 'Waterloo' ",
    index: 10,
    answer: "True",
  },
  {
    question: "Stephen Hawking declined a knighthood from the Queen ",
    index: 11,
    answer: "True",
  },
  {
    question: "  The highest mountain in England is Ben Nevis",
    index: 12,
    answer: "False",
  },
  {
    question: "   Nicolas Cage and Michael Jackson both married the same woman",
    index: 13,
    answer: "True",
  },
  {
    question:
      "  Japan and Russia did not sign a peace treaty after World War Two so are technically still at war",
    index: 14,
    answer: "True",
  },
  {
    question:
      "  The mathematical name for the shape of a Pringle is hyperbolic paraboloid",
    index: 15,
    answer: "True",
  },
  {
    question:
      "Charlie Chaplin came first in a Charlie Chaplin look-alike contest",
    index: 16,
    answer: "False",
  },
  {
    question: "Michael Keaton’s real name is Michael Douglas",
    index: 17,
    answer: "True",
  },
  {
    question: "Napoleon was of below-average height",
    index: 18,
    answer: "False",
  },
  {
    question: "Donald Duck’s middle name is Fauntelroy",
    index: 19,
    answer: "True",
  },
  {
    question: "The Statue of Liberty was a gift from France",
    index: 20,
    answer: "True",
  },
  {
    question:
      "According to Scottish law, it is illegal to be drunk in charge of a cow",
    index: 21,
    answer: "True",
  },
  {
    question: "The Great Wall of China is visible from space",
    index: 22,
    answer: "False",
  },
  {
    question: "The first tea bags were made of silk",
    index: 23,
    answer: "True",
  },
  {
    question: "A metre is further than a yard",
    index: 24,
    answer: "True",
  },
  {
    question: "A woman has walked on the moon",
    index: 25,
    answer: "False",
  },
  {
    question:
      "Flying in an aeroplane is statistically safer than driving in a car",
    index: 26,
    answer: "True",
  },
  {
    question: "John Challis plays Boycie in Only Fools and Horses",
    index: 27,
    answer: "True",
  },
  {
    question: "Valletta is the capital of Cyprus",
    index: 28,
    answer: "False",
  },
  {
    question: "Ben Nevis is the tallest mountain in the UK",
    index: 29,
    answer: "True",
  },
  {
    question: "Radiohead wrote the song Love is All Around",
    index: 30,
    answer: "False",
  },
];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "en-UK";

const button = document.querySelector(".button");
const questionBox = document.querySelector(".questionBox");
const timer = document.querySelector(".timer");

handleStart = () => {
  recognition.start();
  console.log("Start to speech");
};

const newQuestion = quizeList.map((quize) => {
  return console.log(quize, "quize"); //forEach yap
});

handleResults = (e) => {
  // quizeList.map((quize, index) => {
  //   console.log(quize, "quize");
  //    questionBox.innerHTML = quize.question;
  //   e.results[0][0].transcript === quize.answer ? "YES" : "NO";
  // });
};

button.addEventListener("click", handleStart);
recognition.addEventListener("result", (e) => {
  handleResults(e);
});

//ALTERNATIVE
// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();
// recognition.interimResults = true;
// recognition.lang = "en-UK";

// const button = document.querySelector(".button");
// const questionBox = document.querySelector(".questionBox");
// const timer = document.querySelector(".timer");

// let currentQuestion = {};
// let availableQuestions = [];
// let result = [];

// const startGame = () => {
//   availableQuestions = [...questions];
//   getNewQuestion();
//   recognition.start();
// };

// const getNewQuestion = () => {
//   const questionIndex = Math.floor(Math.random() * availableQuestions.length);
//   currentQuestion = availableQuestions[questionIndex];
//   questions.innerText = currentQuestion.question;
//   getResult;
//   availableQuestions.splice(questionIndex, 1);
// };

// const getResult = (e) => {
//   e.results[0][0].transcript === currentQuestion.answer ? "yes" : "no";
//   setTimeout(() => {
//     getNewQuestion();
//   }, 1000);
// };

// button.addEventListener("click", startGame);
// recognition.addEventListener("result", (e) => {
//   getResult(e);
// });

// startGame();
