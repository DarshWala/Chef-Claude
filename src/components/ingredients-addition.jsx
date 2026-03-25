import React from "react";

export default function IngredientsAddition() {
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient-input");
    setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
  }

  const [ingredients, setIngredients] = React.useState([]);
  // const arr = []

  const ele = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <main>
      <form action={addIngredient} id="form">
        <input
          name="ingredient-input"
          className="search-box"
          type="text"
          placeholder="eg. tomato"
          aria-label="add-ingredient"
        ></input>

        <button className="search-box add-button" type="submit">
          + Add Ingredient
        </button>

      </form>

      {ingredients.length > 0 &&  <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {ele}
        </ul>
        {ingredients.length > 4 && <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button>Get a recipe</button>
        </div>}
      </section>}
    </main>
  );
}
