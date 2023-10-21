import React from "react";
import './burger-ingredients.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab';

const BurgerIngredients = () => {
    const [current, setCurrent] = React.useState('one');
    return (
        <main className={`main-burIng`}>

            <h1 className={`h1-burIng`}>Соберите бургер</h1>

            <div style={{ display: 'flex' }}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>

        </main>
    );
}

export default BurgerIngredients;