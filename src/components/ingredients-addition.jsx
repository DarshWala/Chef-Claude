export default function input(){
    return(
        <form id="form">
            <input 
            className="search-box"
            type="text"
            placeholder="eg. tomato"
            aria-label="add-ingredient"
            ></input>
            <button className="search-box add-button" >+Add Ingredient</button>
        </form>
    )
}