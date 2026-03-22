import React from "react";

export default function input() {

    function submit(event) {
        event.preventDefault(); // stops page from refreshing on submit
        const formData = new FormData(event.currentTarget); // used to get form data
        const newIngredient = formData.get("ingredient-input");

        setIngredients( prevIngredient => [...prevIngredient , newIngredient] )

    }

const [ingredients , setIngredients] = React.useState([]);
// const arr = []

const ele = ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>);


  return (
    <>
      <form onSubmit={submit} id="form">
        <input
          name="ingredient-input"
          className="search-box"
          type="text"
          placeholder="eg. tomato"
          aria-label="add-ingredient"
        ></input>

        <button className="search-box add-button">+Add Ingredient</button>
      </form>
    
      <ul>
         {ele}
      </ul>
    </>
  );
}
