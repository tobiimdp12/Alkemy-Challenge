export default function setTypeOfTeam(
  intelligence,
  strength,
  speed,
  durability,
  power,
  combat,
  userHeroes
) {
  let teamArray = [];
  let powerstatName = "You dont have any member on your team";
  teamArray.push(intelligence);
  teamArray.push(strength);
  teamArray.push(speed);
  teamArray.push(durability);
  teamArray.push(power);
  teamArray.push(combat);

  teamArray.sort(function (a, b) {
    return b - a;
  });

  if (userHeroes != null && userHeroes.length <= 0) {
    return powerstatName;
  }
  switch (teamArray[0]) {
    case intelligence:
      powerstatName = "intelligence";
      break;

    case strength:
      powerstatName = "strength";
      break;
    case speed:
      powerstatName = "speed";
      break;

    case durability:
      powerstatName = "durability";
      break;
    case power:
      powerstatName = "power";
      break;
    case combat:
      powerstatName = "combat";
      break;

    default:
      powerstatName = "";
  }

  return powerstatName; //mayor
}
