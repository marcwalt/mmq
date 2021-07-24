var quiz = {
  // (A) PROPERTIES 
  // (A1) QUESTIONS & ANSWERS
  // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
  data: [
  {
    q : "How many Infinity Stones are there?",
    o : [
      "4",
      "5",
      "6",
      "7"
    ],
    a : 2
  },
  {
    q : "By what name is Natasha Romanoff also known as?",
    o : [
      "Scarlet Witch",
      "Mantis",
      "Wasp",
      "Black Widow"
    ],
    a : 3
  },
  {
    q : "What is Captain America’s shield made of?",
    o : [
      "Adamantium",
      "Vibranium",
      "Promethium",
      "Carbonadium"
    ],
    a : 1
  },
  {
    q : "What is the name of T'Challa's sister in Black Panther?",
    o : [
      "Siri",
      "Okoye",
      "Nakia",
      "Shuri"
    ],
    a : 3
  },
  {
    q : "What is name of the alien race Loki sends to invade Earth in The Avengers?",
    o : [
      "The Chitauri",
      "The Skrulls",
      "The Kree",
      "The Flerkens"
    ],
    a : 0
  },
  {
    q : "What is the name of Thor’s hammer?",
    o : [
      "Vanir",
      "Mjolnir",
      "Aesir",
      "Norn"
    ],
    a : 1
  },
  {
    q : "Director Taika Waititi also played which character in Thor: Ragnarok?",
    o : [
      "Hela",
      "Miek",
      "Valkyrie",
      "Korg"
    ],
    a : 3
  },
  {
    q : "Who does Thanos sacrifice to acquire the Soul Stone?",
    o : [
      "Nebula",
      "Ebony Maw",
      "Gamora",
      "Proxima Midnight"
    ],
    a : 2
  },
  {
    q : "What song does Baby Groot dance to at the end of the first Guardians of the Galaxy?",
    o : [
      "‘Cherry Bomb’ – The Runaways",
      "‘I Want You Back’ – The Jackson 5",
      "‘Hooked On A Feeling’ – Voidoid",
      "‘The Chain’ – Fleetwood Mac"
    ],
    a : 1
  },
  {
    q : "What type of doctor is Stephen Strange?",
    o : [
      "Vascular surgeon",
      "Trauma surgeon",
      "Plastic surgeon",
      "Neurosurgeon"
    ],
    a : 3
  },
  {
    q : "Before becoming Vision, what was the name of Iron Man’s A.I. butler?",
    o : [
      "H.O.M.E.R.",
      "J.A.R.V.I.S.",
      "A.L.F.R.E.D.",
      "M.A.R.V.I.N."
    ],
    a : 1
  },
  {
    q : "What is the real name of The Winter Soldier?",
    o : [
      "Sam Wilson",
      "Clint Barton",
      "Phil Coulson",
      "Bucky Barnes"
    ],
    a : 3
  },
  {
    q : "The Red Skull was the commander of which terrorist organization?",
    o : [
      "The Hand",
      "Hydra",
      "Enclave",
      "The Flag Smashers"
    ],
    a : 1
  },
  {
    q : "What is the name of Tony Stark's father?",
    o : [
      "John Stark",
      "Steven Stark",
      "Harold Stark",
      "Howard Stark"
    ],
    a : 3
  },
  {
    q : "What type of radiation turned Bruce Banner into the Hulk?",
    o : [
      "Gamma",
      "Beta",
      "Proton",
      "Alpha"
    ],
    a : 0
  },
  {
    q : "Who created the Ant-Man suit?",
    o : [
      "Scott Lang",
      "Hank Pym",
      "Hope van Dyne",
      "Darren Cross"
    ],
    a : 1
  },
  {
    q : "What is the name of Peter Parker's aunt?",
    o : [
      "Mary",
      "Madeline",
      "Marie",
      "May"
    ],
    a : 3
  },
  {
    q : "Carol Danvers had what profession before becoming Captain Marvel?",
    o : [
      "Pilot",
      "Lawyer",
      "Doctor",
      "Teacher"
    ],
    a : 0
  },
  {
    q : "Wanda Maximoff comes from which fictional country?",
    o : [
      "Wakanda",
      "Latveria",
      "Madripoor",
      "Sokovia"
    ],
    a : 3
  },
  {
    q : "Drax is played by which former WWE wrestler?",
    o : [
      "Hulk Hogan",
      "John Cena",
      "Dave Bautista",
      "Steve Austin"
    ],
    a : 2
  },
  ],

  // (A2) HTML ELEMENTS
  hWrap: null,
  hQn: null,
  hAns: null, 

  // (A3) GAME FLAGS
  now: 0, 
  score: 0,

  // (B) INIT QUIZ HTML
  init: function(){
    // (B1) WRAPPER
    quiz.hWrap = document.getElementById("quizWrap");

    // (B2) QUESTIONS SECTION
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

    // (B3) ANSWERS SECTION
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

    // (B4) GO!
    quiz.draw();
  },

  // (C) DRAW QUESTION
  draw: function(){
    // (C1) QUESTION
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;

    // (C2) OPTIONS
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", quiz.select);
      quiz.hAns.appendChild(label);
    }
  },
  
  // (D) OPTION SELECTED
  select: function(){
    // (D1) DETACH ALL ONCLICK
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

    // (D2) CHECK IF CORRECT
    let correct = this.dataset.idx == quiz.data[quiz.now].a;
    if (correct) { 
      quiz.score++; 
      this.classList.add("correct");
    } else {
      this.classList.add("wrong");
    }
  
    // (D3) NEXT QUESTION OR END GAME
    quiz.now++;
    setTimeout(function(){
      if (quiz.now < quiz.data.length) { quiz.draw(); } 
      else {
        quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
        quiz.hAns.innerHTML = "";
      }
    }, 1000);
  }
};
window.addEventListener("load", quiz.init);