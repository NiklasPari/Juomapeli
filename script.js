document.addEventListener("DOMContentLoaded", () => {
  const playerList = document.getElementById("player-list");
  const categorySelect = document.getElementById("category-select");
  const playerInput = document.getElementById("player-input");
  const addPlayerBtn = document.getElementById("addPlayerBtn");
  const startBtn = document.getElementById("start-btn");
   const nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click", nextTurn);
  let players = JSON.parse(localStorage.getItem('players')) || [];
  let questions = {};
  let currentCategory = "";
  let currentPlayerIndex = 0;
  let questionsLeft = [];

  // Lataa kysymykset ja täytä select
  //kysymykset on chatgpt generoimat voi olla virheitä
 fetch("questions.json")
  .then(res => res.json())
  .then(data => {
    questions = data;
    categorySelect.innerHTML = '<option value="">Valitse kategoria</option>';

    Object.keys(questions).forEach(cat => {
      const option = document.createElement("option");
      option.value = cat;
      option.textContent = cat;
      categorySelect.appendChild(option);
    });
    updateStartBtn();
  });

    function updateStartBtn() {
  startBtn.disabled = players.length < 2 || !categorySelect.value;
}

  function renderPlayers() {
    playerList.innerHTML = "";
    players.forEach((player, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<span>${player}</span>
        <button class="removePlayer" data-index="${index}">Poista</button>`;
      playerList.appendChild(li);
    });
    startBtn.disabled = players.length < 2 || !categorySelect.value;
    localStorage.setItem('players', JSON.stringify(players));
  }

  renderPlayers();

  addPlayerBtn.addEventListener("click", () => {
    const name = playerInput.value.trim();
    if (name) {
      players.push(name);
      playerInput.value = "";
      renderPlayers();
    }
  });

  playerList.addEventListener("click", (event) => {
    if (event.target.classList.contains("removePlayer")) {
      const index = Number(event.target.dataset.index);
      players.splice(index, 1);
      renderPlayers();
    }
  });

  // Päivitä startBtn
  categorySelect.addEventListener("change", () => {
    startBtn.disabled = players.length < 2 || !categorySelect.value;
  });






//logiigga pelin alkuun
startBtn.addEventListener("click", () => {
  currentCategory = categorySelect.value;
  if (!currentCategory) return;
  // ota 5 random kysymystä 
  const allQuestions = [...questions[currentCategory]].sort(() => Math.random() - 0.5);
  const totalQuestionsNeeded = players.length * 5;
  // poista loput
  questionsLeft = allQuestions.slice(0, totalQuestionsNeeded);

  currentPlayerIndex = 0;
  showView("game");
  nextTurn();
});

  function nextTurn() {
    if (questionsLeft.length === 0) {
      showView("end");
      return;
    }
    const q = questionsLeft.pop();
    document.getElementById("current-player").textContent = "Vuorossa: " + players[currentPlayerIndex];
    document.getElementById("question-text").textContent = q;
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
  }

  document.getElementById("restart-btn").addEventListener("click", () => {
    showView("setup");
    questionsLeft = [];
    currentPlayerIndex = 0;
    document.getElementById("question-text").textContent = "";
    categorySelect.value = "";
    startBtn.disabled = players.length < 2;
  });

  function showView(viewId) {
    document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
    document.getElementById(viewId).style.display = "block";
  }
});