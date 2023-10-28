import React from "react";
import styles from './burger-ingredients.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab';
import Ingredients from "./ingredients/ingredients";

const BurgerIngredients = () => {

    const [current, setCurrent] = React.useState("bread");

    return (
        <main className={styles.mainBurIng}>

            <h1 className={styles.h1BurIng}>Соберите бургер</h1>

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