function VictoryCount(victorys, losses) {
  return victorys - losses;
}

function Ranked(value) {
  const levels = [
    { max: 10, name: "Ferro" },
    { max: 20, name: "Bronze" },
    { max: 50, name: "Prata" },
    { max: 80, name: "Ouro" },
    { max: 90, name: "Diamante" },
    { max: 100, name: "Lendário" },
    { max: Infinity, name: "Imortal" }
  ];

  let nivel = "";
  for (let level of levels) {
    if (value <= level.max) {
      nivel = level.name;
      break;
    }
  }

  return console.log(`O Héroi tem de saldo de ${value} está no nível de ${nivel}`);
}
