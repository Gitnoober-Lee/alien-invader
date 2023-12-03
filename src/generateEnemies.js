export default function generateEnemies(handleClickParent) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  const enemies = [];
  const alienCount = 26 * 30;
  const bonusCount = 18;
  const bombCount = 40;
  const desitinedCardCount = 18;
  let sumCount = 0;

  for (let i = 0; i < alienCount; i++) {
    enemies.push({
      key: i,
      x: -100,
      y: 10,
      type: "Alien",
      text: characters.charAt(Math.floor(Math.random() * 26)),
      handleClick: handleClickParent,
    });
  }
  sumCount+=alienCount;
  for (let i = 0; i < bonusCount; i++) {
    enemies.push({
      key: i+sumCount,
      x: -100,
      y: 10,
      type: "Bonus",
      text: null,
      handleClick: handleClickParent,
    });
  }
  sumCount+=bonusCount;
  for (let i = 0; i < bombCount; i++) {
    enemies.push({
      key: i+sumCount,
      x: -100,
      y: 10,
      type: "Bomb",
      text: null,
      handleClick: handleClickParent,
    });
  }
  sumCount+=bombCount;
  for (let i = 0; i < desitinedCardCount; i++) {
    enemies.push({
      key: i+sumCount,
      x: -100,
      y: 10,
      type: "Desitined Card",
      text: null,
      handleClick: handleClickParent,
    });
  }

  return enemies;
}
