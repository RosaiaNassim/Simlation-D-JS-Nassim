function tourneLeDé() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  console.log("aléatoire", randomNumber);

  const diceImage = document.getElementById("dice");
  diceImage.src = `dieWhite${randomNumber}.png`;
}
