const state = {
  players: [],
};
const baseURL = `https://fsa-puppy-bowl.herokuapp.com/api/2406-ftb-et-web-ft`;

const Puppies = async () => {
  try {
    const response = await fetch(baseURL + `/players`);
    const responseJson = await response.json();
    const thePlayers = responseJson.data.players;
    state.players = thePlayers;
    renderallPlayers();
  } catch (err) {
    console.error(err);
  }
};

const renderallPlayers = () => {
  const main = document.querySelector(`main`);
  const ol = document.createElement(`ol`);
  state.players.forEach((player) => {
    const newLI = document.createElement(`li`);
    newLI.innerText = player.name;
    newLI.addEventListener(`click`, (event) => {
      const clickedPlayer = state.players.find((player) => {
        return player.name === event.target.innerText;
      });
      main.innerHTML = 
      `
      <h1>${clickedPlayer.cohortId}</h1>

      <img src="${clickedPlayer.imageUrl}"/>

      <button id="backButton">Back</button>
      `;

      const backButton = document.getElementById(`backButton`);
      backButton.addEventListener(`click`, () => {
        window.location.reload();
      });
    });
    ol.append(newLI);
  });
  main.append(ol);
};

Puppies();