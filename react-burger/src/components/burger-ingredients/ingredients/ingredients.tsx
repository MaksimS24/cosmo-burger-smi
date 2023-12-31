import React, {useEffect, useState} from "react";
import styles from './ingredients.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const Ingredients = () => {

    // {data}: { [key: string]: any }
    // const [ingredients, setIngredients] = useState({
    //             _id: _id,
    //             name: name;
    //             type: string;
    //             proteins: number;
    //             fat: number;
    //             carbohydrates: number;
    //             calories: number;
    //             price: number;
    //             image: string;
    //             image_mobile: string;
    //             image_large: string;
    //             __v: number;
    //         });
    //
    // const onChange = e => {
    //     if (e.target.name === 'name') {
    //         setState({ ...state, name: e.target.checked });
    //     } else {
    //         setState({ ...state, [e.target.name]: e.target.value });
    //     }
    // };

    return (
        <div className={styles.mainIngredient}>

            {/*<div>{data.price}</div>*/}

            <ul className={styles.ingredients}>

                {/*Булки*/}
                <li id={styles.bread}>
                    <p className="text text_type_main-medium">Булки</p>
                    <ul className={styles.ulBread}>
                        <li>
                            <span className={styles.price}>
                            <p className={`text text_type_digits-default mr-2`}>20</p>
                                <CurrencyIcon type="primary"/>
                            </span>
                            <p className="text text_type_main-small">Краторная булка N-200i</p>
                        </li>
                        <li>
                            <span className={styles.price}>
                            <p className={`text text_type_digits-default mr-2`}>20</p>
                                <CurrencyIcon type="primary"/>
                            </span>
                            <p className="text text_type_main-small">Флюоресцентная булка R2-D3</p>
                        </li>
                    </ul>
                </li>

                {/*Соусы*/}
                <li id={styles.sauce}>
                    <p className="text text_type_main-medium">Соусы</p>
                    <ul className={styles.ulSauce}>
                        <li>
                            <span className={styles.price}>
                            <p className={`text text_type_digits-default mr-2`}>30</p>
                                <CurrencyIcon type="primary"/>
                            </span>
                            <p className="text text_type_main-small">Соус Spicy-X</p>
                        </li>
                        <li>
                            <span className={styles.price}>
                            <p className={`text text_type_digits-default mr-2`}>30</p>
                                <CurrencyIcon type="primary"/>
                            </span>
                            <p className="text text_type_main-small">Соус фирменный Space Sauce</p>
                        </li>
                        <li>
                            <span className={styles.price}>
                            <p className={`text text_type_digits-default mr-2`}>30</p>
                                <CurrencyIcon type="primary"/>
                            </span>
                            <p className="text text_type_main-small">Соус традиционный галактический</p>
                        </li>
                        <li>
                            <span className={styles.price}>
                            <p className={`text text_type_digits-default mr-2`}>30</p>
                                <CurrencyIcon type="primary"/>
                            </span>
                            <p className="text text_type_main-small">Соус с шипами Антарианского плоскоходца</p>
                        </li>
                    </ul>
                </li>

                {/*Начинки*/}
                <li id={styles.filling}>
                    <p className="text text_type_main-medium">Начинки</p>
                    <ul className={styles.ulFilling}>
                        <li>
                            <span className={styles.price}>
                            <p className={`text text_type_digits-default mr-2`}>300</p>
                                <CurrencyIcon type="primary"/>
                            </span>
                            <p className="text text_type_main-small">Филе Люминесцентного тетраодонтимформа</p>
                        </li>
                        <li>
                            <span className={styles.price}>
                            <p className={`text text_type_digits-default mr-2`}>300</p>
                                <CurrencyIcon type="primary"/>
                            </span>
                            <p className="text text_type_main-small">Мясобессмертных моллюсков Protostomia</p>
                        </li>
                        <li>
                            <span className={styles.price}>
                            <p className={`text text_type_digits-default mr-2`}>300</p>
                                <CurrencyIcon type="primary"/>
                            </span>
                            <p className="text text_type_main-small">Говяжий метеорит (отбивная)</p>
                        </li>
                        <li>
                            <span className={styles.price}>
                            <p className={`text text_type_digits-default mr-2`}>300</p>
                                <CurrencyIcon type="primary"/>
                            </span>
                            <p className="text text_type_main-small">Биокотлета из марсианской Магнолии</p>
                        </li>

                        <li>
                            <span className={styles.price}>
                            <p className={`text text_type_digits-default mr-2`}>80</p>
                                <CurrencyIcon type="primary"/>
                            </span>
                            <p className="text text_type_main-small">Плоды фалленианского дерева</p>
                        </li>
                        <li>
                            <span className={styles.price}>
                            <p className={`text text_type_digits-default mr-2`}>80</p>
                                <CurrencyIcon type="primary"/>
                            </span>
                            <p className="text text_type_main-small">Кристалы марсианских альфа-сахаридов</p>
                        </li>
                        <li>
                            <span className={styles.price}>
                            <p className={`text text_type_digits-default mr-2`}>80</p>
                                <CurrencyIcon type="primary"/>
                            </span>
                            <p className="text text_type_main-small">Хрустящие миниральные кольца</p>
                        </li>
                        <li>
                            <span className={styles.price}>
                            <p className={`text text_type_digits-default mr-2`}>80</p>
                                <CurrencyIcon type="primary"/>
                            </span>
                            <p className="text text_type_main-small">Мини-салат Экзо-Плантаго</p>
                        </li>
                        <li>
                            <span className={styles.price}>
                            <p className={`text text_type_digits-default mr-2`}>80</p>
                                <CurrencyIcon type="primary"/>
                            </span>
                            <p className="text text_type_main-small">Сыр с астероидной плесенью</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Ingredients;