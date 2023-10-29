import React from "react";

import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

import styles from './main-page.module.css';
import ingredients from "../burger-ingredients/ingredients/ingredients";

const MainPage = () => {
    return (
        <main className={styles.mainPage}>
            <ul className={styles.ulMainPage}>
                <li className={styles.liMainPage}><BurgerIngredients/></li>
                <li className={styles.liMainPage}><BurgerConstructor/></li>
            </ul>
        </main>
    );
}

export default MainPage;
