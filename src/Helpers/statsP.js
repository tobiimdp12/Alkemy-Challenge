export const intelligenceS = () => {
    let arrayHero = JSON.parse(localStorage.getItem("userHeroes"));
  
    let total = 0;
    if (arrayHero != null) {
      arrayHero.forEach(function (heroIntel) {
        if (heroIntel.powerstats.intelligence !== "null") {
          total += parseInt(heroIntel.powerstats.intelligence);
        }
      });
    }
    return total;
  };
  export const strengthS = () => {
    let arrayHero = JSON.parse(localStorage.getItem("userHeroes"));
  
    let total = 0;
    if (arrayHero != null) {
      arrayHero.forEach(function (heroStren) {
        if (heroStren.powerstats.strength !== "null") {
          total += parseInt(heroStren.powerstats.strength);
        }
      });
    }
    return total;
  };
  
  export const speedS = () => {
    let arrayHero = JSON.parse(localStorage.getItem("userHeroes"));
  
    let total = 0;
    if (arrayHero != null) {
      arrayHero.forEach(function (heroSpeed) {
        if (heroSpeed.powerstats.speed !== "null") {
          total += parseInt(heroSpeed.powerstats.speed);
        }
      });
    }
    return total;
  };
  
  export const durabilityS = () => {
    let arrayHero = JSON.parse(localStorage.getItem("userHeroes"));
  
    let total = 0;
    if (arrayHero != null) {
      arrayHero.forEach(function (heroDurability) {
        if (heroDurability.powerstats.durability !== "null") {
          total += parseInt(heroDurability.powerstats.durability);
        }
      });
    }
    return total;
  };
  export const powerS = () => {
    let arrayHero = JSON.parse(localStorage.getItem("userHeroes"));
  
    let total = 0;
    if (arrayHero != null) {
      arrayHero.forEach(function (heroPower) {
        if (heroPower.powerstats.power !== "null") {
          total += parseInt(heroPower.powerstats.power);
        }
      });
    }
    return total;
  };
  export const combatS = () => {
    let arrayHero = JSON.parse(localStorage.getItem("userHeroes"));
  
    let total = 0;
    if (arrayHero != null) {
      arrayHero.forEach(function (heroCombat) {
        if (heroCombat.powerstats.combat !== "null") {
          total += parseInt(heroCombat.powerstats.combat);
        }
      });
    }
    return total;
  };
  
  export const heightS = () => {
    let arrayHero = JSON.parse(localStorage.getItem("userHeroes"));
  
    let total = 0;
    if (arrayHero != null) {
      arrayHero.forEach(function (heroHeight) {
        if (heroHeight.apparence.height[1] !== "null") {
          total += parseInt(heroHeight.apparence.height[1]);
        }
      });
    }
    return total;
  };
  
  export const weightS = () => {
    let arrayHero = JSON.parse(localStorage.getItem("userHeroes"));
  
    let total = 0;
    if (arrayHero != null) {
      arrayHero.forEach(function (heroWeight) {
        if (heroWeight.apparence.height[1] !== "null") {
          total += parseInt(heroWeight.apparence.height[1]);
        }
      });
    }
    return total;
  };
  