import React from 'react';
import style from './recipe.module.css';
const Recipe = ({title,calories,image,ingredients}) =>{
    return(
        <div className={style.recipe}>
            <div className={style.header}>
                <h1>{title}</h1>
            </div>
            <div> 
            <h2 className={style.header}>Ingredients</h2>
           <ol>
           {ingredients.map(ingredient=>(
                <li key={Math.random()*1000}>{ingredient.text}</li>
            ))}
           </ol> 
            </div>
            <p> <strong>Calories: </strong>{parseFloat(calories).toFixed(1).toLocaleString('tr-TR')}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}
export default Recipe;