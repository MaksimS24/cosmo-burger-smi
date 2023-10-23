import React from "react";
import './burger-ingredients.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab';
import Ingredients from "./ingredients/ingredients";

const BurgerIngredients = () => {

    const [current, setCurrent] = React.useState(['bread']);
    return (
        <main className={`main-burIng`}>

            <h1 className={`h1-burIng`}>Соберите бургер</h1>

            <div style={{ display: 'flex' }}>
                <Tab value="bread" active={current === 'bread'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="filling" active={current === 'filling'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <Ingredients/>
        </main>
    );
}

export default BurgerIngredients;