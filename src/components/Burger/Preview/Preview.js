import React from 'react';
import burgerClass from './Preview.css';
import Aux from '../../../hoc/Auxi';

function Preview(props) {
    let seeds = null;
    if(props.bread.hasSeeds) {
        seeds = (<Aux>
                    <div className={[burgerClass.seed, burgerClass.seed1].join(' ')} />
                    <div className={[burgerClass.seed, burgerClass.seed2].join(' ')} />
                    <div className={[burgerClass.seed, burgerClass.seed3].join(' ')} />
                    <div className={[burgerClass.seed, burgerClass.seed4].join(' ')} />
                    <div className={[burgerClass.seed, burgerClass.seed5].join(' ')} />
                </Aux>);
    }

    let allIngredients = props.selectedIngredients.map((ingredient, index) => {
        return  <div key={index} value={index} onClick={() => props.onRemove(index, ingredient)} className={[burgerClass.burger, burgerClass[ingredient.name]].join(' ')} title={ingredient.title}></div>;
    });

    let defaultMessage = null;
    if(allIngredients.length === 0) {
        defaultMessage = <div className={[burgerClass.burger, burgerClass.burgerText].join(' ')}>Select the ingredients</div>;
    }

    return (
        <div className={burgerClass.background}>
             <div className={[burgerClass.burger, burgerClass.topBun, burgerClass[props.bread.name]].join(' ')} title={props.bread.title}>
                {seeds}
            </div>
            {defaultMessage}
            {allIngredients}
            <div className={[burgerClass.burger, burgerClass.bottomBun, burgerClass[props.bread.name]].join(' ')} title={props.bread.title}></div>
        </div>
    );
}

export default Preview;