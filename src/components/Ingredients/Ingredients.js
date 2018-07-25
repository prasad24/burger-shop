import React from 'react';
import ingredientClass from './Ingredients.css';
import Ingredient from '../Ingredient/Ingredient';

function ingredients(props) {

    let allIngredients = props.ingredients.reduce((arr, ingredient) => {
        arr[ingredient.group] = {
            max: ingredient.max,
            used: ingredient.used,
            contents: ingredient.contents
        };
        return arr;
    }, []);

    return (
        <div className={ingredientClass.ingredient}>
            <div className={ingredientClass.group}>
                <h3>Breads</h3>
                <Ingredient onAdd={props.onAdd} enabled="true" group="Breads" items={allIngredients.Breads.contents}></Ingredient>
            </div>
            <div className={ingredientClass.group}>
                <h3>Veggies (Max: {allIngredients.Veggies.max}, Used:  {allIngredients.Veggies.used}) </h3>
                <Ingredient onAdd={props.onAdd} group="Veggies" enabled={allIngredients.Veggies.used < allIngredients.Veggies.max ? true : false} items={allIngredients.Veggies.contents}></Ingredient>
            </div>
            <div className={ingredientClass.group}>
                <h3>Meats (Max: {allIngredients.Meats.max}, Used:  {allIngredients.Meats.used})</h3>
                <Ingredient onAdd={props.onAdd} group="Meats" enabled={allIngredients.Meats.used < allIngredients.Meats.max ? true : false}  items={allIngredients.Meats.contents}></Ingredient>
            </div>
            <div className={ingredientClass.group}>
                <h3>Cheese (Max: {allIngredients.Cheese.max}, Used:  {allIngredients.Cheese.used})</h3>
                <Ingredient onAdd={props.onAdd} group="Cheese" enabled={allIngredients.Cheese.used < allIngredients.Cheese.max ? true : false} items={allIngredients.Cheese.contents}></Ingredient>
            </div>
        </div>
    );
}

export default ingredients;