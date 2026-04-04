import React from "react";
import RecipeSec from "./recipeSection";
import IngList from "./ingredientsList";
import { GetRecipeFromMistral } from "../../ai";

export default function IngredientsAddition() {
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient-input");
    setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
  }

  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);

async function toggleRecipeShown() {
    const recipeMarkdown = await GetRecipeFromMistral(ingredients)
    console.log(recipeMarkdown)
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
