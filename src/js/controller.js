import * as model from './model.js';
import recipeView from './views/recipeView.js';

// ('use strict');
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// console.log(icons);
//shortcuts

// const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
//functions

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    //1) loading recipe
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    // 2 rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
