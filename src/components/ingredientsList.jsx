export default function IngList(props) {
  return (
<form action={props.addIngredient} id="form">
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

  );
}
