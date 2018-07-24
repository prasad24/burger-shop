import React from 'react';
import ingredientClass from './Ingredient.css';

function ingredient(props) {

    let allItems = props.items.map(item => {
        return (
            <tr key={item.name}>
                <td className={ingredientClass.ingredient}>{item.title}</td>
                {/* <td className={ingredientClass.used}>{item.used}</td>
                <td className={ingredientClass.price}>${item.price}</td> */}
                <td className={ingredientClass.button}><button disabled={!props.enabled} value={[props.group,item.name].join('-')} onClick={props.onAdd}>Add</button></td>
            </tr>
        );
    })

    return (
        <table>
            <thead>
                <tr>
                    <th className={ingredientClass.ingredient}>Ingredient</th>
                    {/* <th>Count</th>
                    <th>Price</th> */}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {allItems}
            </tbody>
        </table>
    );
}

export default ingredient;