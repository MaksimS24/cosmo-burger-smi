import React from "react";

import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

import './main-page.css';

const MainPage = () => {
    return (
        <main className='main-page'>
            <ul className={`ul-mainPage`}>
                <li className={`li-mainPage`}><BurgerIngredients/></li>
                <li className={`li-mainPage`}><BurgerConstructor/></li>
            </ul>


        </main>
    );
}

export default MainPage;
