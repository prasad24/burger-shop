import React, {Component} from 'react';
import Preview from './Preview/Preview';
import Ingredients from './Ingredients/Ingredients';

class Burger extends Component {

    state = {
        bread: { name:"whitebread", title: 'White Bread', hasSeeds: false},
        selectedIngredients : [],
        minPrice: 6.99,
        ingredients : [
            {
                group: "Veggies", max:5, used:0,
                contents: [
                    { name:"lettuce", title: 'Lettuce', price: 0, used: 0},
                    { name:"tomato", title: 'Tomato', price: 0, used: 0},
                    { name:"onion", title: 'Onion', price: 0, used: 0},
                    { name:"veggiepattie", title: 'Veggie Pattie', price: 6.99, used: 0},
                ]
            },
            {
                group: "Cheese", max:5, used:0,
                contents: [
                    { name:"swisscheese", title: 'Swiss Cheese', price: .99, used: 0},
                    { name:"americancheese", title: 'American Cheese', price: .99},
                    { name:"pepperjackcheese", title: 'PepperJack Cheese', price: .99, used: 0},
                ]
            },
            {
                group: "Meats", max:5, used:0,
                contents: [
                    { name:"bacon", title: 'Bacon', max: 5, price: .99, used: 0},
                    { name:"meatpattie", title: 'Meat Pattie', price: 6.99, used: 0},
                ]
            },
            {
                group: "Breads", max:1, used:1,
                contents: [
                    { name:"whitebread", title: 'White Bread', price: 0, used: 0, hasSeeds: false},
                    { name:"wheatbread", title: 'Wheat Bread', price: 0, used: 0, hasSeeds: false},
                    { name:"ryebread", title: 'Rye Bread', price: 0, used: 0, hasSeeds: true}
                ]
            }
        ]
    }

    addIngredient(event) {
        const { selectedIngredients, ingredients } = this.state;
        const [group, name] = event.target.value.split('-');
        const { title, hasSeeds, price } = ingredients.filter(item => item.group === group)[0]
                                                .contents.filter(item => item.name === name)[0];
        if(group === 'Breads') {
            this.setState({
                bread: { name, title, hasSeeds}
            });
        } else {
            const selectedGroup = ingredients.filter(item => item.group === group)[0];
            if(selectedGroup.used < selectedGroup.max) {
                const updatedIngredients = ingredients.map(grp => {
                    if(grp.group === group) {
                        if(grp.used < grp.max) {
                            grp.used = grp.used + 1
                        }
                    }
                    return grp;
                });
                selectedIngredients.push({title, name, group, price});
                this.setState({
                    selectedIngredients,
                    ingredients: updatedIngredients
                });
            }
        }
    }

    removeIngredient(index, ingredient) {
        const oldState = {...this.state};
        oldState.selectedIngredients.splice(index, 1);
        oldState.ingredients.map(item => {
            if(item.group === ingredient.group) {
                item.used = item.used - 1;
            }
            return item;
        });
        this.setState({
            ...oldState
        })
    }

    checkout() {
        console.log(this.state.selectedIngredients);
    }

    render() {
        return (
            <div>
                <h1>Build Your Burger</h1>
                <Preview onCheckout={() => this.checkout()} onRemove={(index, ingredient) => this.removeIngredient(index, ingredient)} minPrice={this.state.minPrice} bread={this.state.bread} selectedIngredients={this.state.selectedIngredients}></Preview>
                <Ingredients onAdd={event => this.addIngredient(event)} ingredients={this.state.ingredients}></Ingredients>
            </div>
        )
    }
}

export default Burger;