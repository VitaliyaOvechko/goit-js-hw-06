const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingrList = document.querySelector('#ingredients');

const ingredientItem = ingredients.map((ingredient) => {
  const ingredientItemEl = document.createElement('li');

  ingredientItemEl.classList.add('item');

  ingredientItemEl.textContent = ingredient;

  ingrList.appendChild(ingredientItemEl);
});

