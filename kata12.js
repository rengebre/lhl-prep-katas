const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (let recipe of recipes) {
    let bakeryAFlag = false;
    let bakeryBFlag = false;
    // cycle through bakery A ingredient list and try to match either value
    for (let ingredient of bakeryA) {
      if (ingredient === recipe.ingredients[0] || ingredient === recipe.ingredients[1]) {
        bakeryAFlag = true;
        break;
      }
    }
    // skip running through bakery B list if there is no match in bakery A. (Problem parameter -> item from each list)
    if (bakeryAFlag === false) {
      continue;
    } else {
      // cycle through bakery B ingredient list and try to match either value
      for (let ingredient of bakeryB) {
        if (ingredient === recipe.ingredients[0] || ingredient === recipe.ingredients[1]) {
          bakeryBFlag = true;
          break;
        }
      }
    }
    if (bakeryAFlag && bakeryBFlag) {
      return recipe.name;
    }
  }
  // return a message if there was no match
  return "There was no match";
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];


console.log(chooseRecipe(bakeryA, bakeryB, recipes));