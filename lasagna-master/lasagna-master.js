/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export const cookingStatus = function (remainingTime) {
  return remainingTime !== 0
    ? remainingTime > 0
      ? "Not done, please wait."
      : "You forgot to set the timer."
    : "Lasagna is done.";
};

export const preparationTime = function (layerArray, averageTime = 2) {
  return layerArray.length * averageTime;
};

export const quantities = function (layerArray) {
  let noodlesCount = 0;
  let sauceCount = 0;

  layerArray.forEach((layer) => {
    layer === "noodles"
      ? (noodlesCount += 50)
      : layer === "sauce"
      ? (sauceCount += 0.2)
      : null;
  });

  return { noodles: noodlesCount, sauce: sauceCount };
};

export const addSecretIngredient = function (friendList, myList) {
  myList.push(friendList[friendList.length - 1]);
};

export const scaleRecipe = function (recipe, portionNumber) {
  let newRecipe = recipe;

  // Iterate through the object
  for (const key in newRecipe) {
   newRecipe.key
  }

  return newRecipe;
};
