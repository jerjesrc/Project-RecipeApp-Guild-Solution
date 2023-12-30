import React, { useState } from "react";

function RecipeCreate({createRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
//  const [rating, setRating] = useState("");    <- This line came in the code given from Thinkful but this is not needed.
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipes({name, cuisine, photo, ingredients, preparation});
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };
  
  const handleNameChange = (event) => setName(event.target.value);
  const handleCuisineChange = (event) => setCuisine(event.target.value);
  const handlePhotoChange = (event) => setPhoto(event.target.value);
  const handleIngridientsChange = (event) => setIngredients(event.target.value);
  const handlePreparationChange = (event) => setPreparation(event.target.value);
    
  return (
    <form name="create" onSubmit = {handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleNameChange}
                value={name}
                style={{maxWidth: '80%'}}
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleCuisineChange}
                value={cuisine}
                style={{maxWidth: '80%'}}
              />
            </td>
            <td>
              <input
                id="photo"
                type="url"
                name="photo"
                onChange={handlePhotoChange}
                value={photo}
                style={{maxWidth: '80%'}}
              />              
            </td>
            <td>
              <textarea 
                id="ingredients" 
                name="ingredients" 
                required={true} 
                rows={2} 
                onChange={handleIngridientsChange} 
                value={ingredients} 
              />
            </td>
            <td>
              <textarea 
                id="preparation" 
                name="preparation" 
                required={true} 
                rows={2} 
                onChange={handlePreparationChange} 
                value={preparation} 
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
