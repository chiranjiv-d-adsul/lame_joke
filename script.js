const jokes = [

  {
    category: "Desi",
    emoji: "🐘",
    question: "Hathi cheethi?",
    answer: 'Hathi: "Nahi, main toh elephant hoon." 💀',
    score: 97
  },

  {
    category: "Desi",
    emoji: "🚆",
    question: "Mumbai local itni fast kyun hai?",
    answer: "Kyuki usko late hone ka darr hai. 😭",
    score: 91
  },

  {
    category: "Desi",
    emoji: "🥔",
    question: "Aloo ne shaadi kyun ki?",
    answer: 'Kyuki usko bhi "settle down" hona tha.',
    score: 94
  },

  {
    category: "Desi",
    emoji: "☕",
    question: "Chai ko English mein kya bolte hain?",
    answer: "Tea. Aur biscuit ko emotional support. 🥲",
    score: 99
  },

  {
    category: "Animals",
    emoji: "🐟",
    question: "What do you call a fish without eyes?",
    answer: "Fsh. 👁️❌",
    score: 99
  },

  {
    category: "Animals",
    emoji: "🐄",
    question: "Why did the cow cross the road?",
    answer: "To get to the udder side.",
    score: 96
  },

  {
    category: "Animals",
    emoji: "🐝",
    question: "What do bees use to brush their hair?",
    answer: "A honeycomb. 🍯",
    score: 95
  },

  {
    category: "Dad",
    emoji: "🍅",
    question: "Why did the tomato blush?",
    answer: "Because it saw the salad dressing.",
    score: 88
  },

  {
    category: "Dad",
    emoji: "🧀",
    question: "What did the cheese say to itself in the mirror?",
    answer: "Halloumi! 🧀",
    score: 93
  },

  {
    category: "Dad",
    emoji: "🚲",
    question: "Why couldn't the bicycle stand up?",
    answer: "Because it was two-tired.",
    score: 90
  },

  {
    category: "Coding",
    emoji: "💻",
    question: "Why did the developer go broke?",
    answer: "Because he used up all his cache.",
    score: 92
  },

  {
    category: "Coding",
    emoji: "🐛",
    question: "Why was the programmer cold?",
    answer: "Because he left his Windows open.",
    score: 95
  },

  {
    category: "Coding",
    emoji: "404",
    question: "What is a programmer's favourite place?",
    answer: "The foo-bar. Obviously.",
    score: 98
  },

  {
    category: "College",
    emoji: "📚",
    question: "Why did the student eat his homework?",
    answer: "The teacher said it was a piece of cake.",
    score: 94
  },

  {
    category: "College",
    emoji: "😴",
    question: "What is a student's favourite programming language?",
    answer: "SleepScript.",
    score: 99
  }

];


let currentCategory = "All";

let currentJoke = jokes[0];


// DOM elements

const emojiElement =
  document.getElementById("jokeEmoji");

const questionElement =
  document.getElementById("jokeQuestion");

const answerElement =
  document.getElementById("jokeAnswer");

const scoreElement =
  document.getElementById("jokeScore");

const meterFill =
  document.getElementById("meterFill");

const anotherButton =
  document.getElementById("anotherBtn");

const copyButton =
  document.getElementById("copyBtn");

const terribleButton =
  document.getElementById("terribleBtn");

const toast =
  document.getElementById("toast");


// Get random joke

function getRandomJoke() {

  let availableJokes;

  if (currentCategory === "All") {

    availableJokes = jokes;

  } else {

    availableJokes =
      jokes.filter(
        joke => joke.category === currentCategory
      );

  }

  return availableJokes[
    Math.floor(
      Math.random() * availableJokes.length
    )
  ];
}


// Display joke

function displayJoke(joke) {

  currentJoke = joke;

  emojiElement.textContent =
    joke.emoji;

  questionElement.textContent =
    joke.question;

  answerElement.textContent =
    joke.answer;

  scoreElement.textContent =
    `${joke.score}%`;

  meterFill.style.width =
    `${joke.score}%`;
}


// Another joke

anotherButton.addEventListener(
  "click",
  () => {

    const joke = getRandomJoke();

    displayJoke(joke);

  }
);


// Categories

const categoryButtons =
  document.querySelectorAll(".chip");

categoryButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      currentCategory =
        button.dataset.category;

      categoryButtons.forEach(btn => {

        btn.classList.remove("active");

      });

      button.classList.add("active");

      displayJoke(
        getRandomJoke()
      );

    }
  );

});


// Copy joke

copyButton.addEventListener(
  "click",
  async () => {

    const text =
      `${currentJoke.question}\n${currentJoke.answer}`;

    try {

      await navigator.clipboard.writeText(text);

      showToast(
        "Copied. Your friends will hate you. 😂"
      );

    } catch (error) {

      showToast(
        "Couldn't copy. Try again."
      );

    }

  }
);


// Terrible button

terribleButton.addEventListener(
  "click",
  () => {

    const messages = [

      "I know. 😭",

      "You actually read that?",

      "Comedy has left the building.",

      "Sorry. 💀",

      "That joke needs therapy.",

      "Even I regret that one.",

      "Please don't tell anyone I made this."

    ];

    const randomMessage =
      messages[
        Math.floor(
          Math.random() * messages.length
        )
      ];

    showToast(randomMessage);

  }
);


// Toast

function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 1800);

}


// Initial joke

displayJoke(jokes[0]);