import React from "react";
import RecipeSec from "./recipeSection";
import IngList from "./ingredientsList";

export default function IngredientsAddition() {
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient-input");
    setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
  }

  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);

  function toggleRecipeShown() {
    setRecipeShown((prevShown) => !prevShown);
  }

  return (
    <main>
      <IngList addIngredient={addIngredient} />

      <RecipeSec
        ingredients={ingredients}
        recipeShown={recipeShown}
        showRecipe={toggleRecipeShown}
      />
    </main>
  );
}
