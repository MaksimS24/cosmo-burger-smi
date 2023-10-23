import React from "react";
import './ingredients.css';

const Ingredients = () => {
    return (
        <div className={`main-ingredient mt-4`}>
            <ul className={`ingredients`}>
                {/*Булки*/}
                <li id={`bread`}>
                    <p className="text text_type_main-medium">Булки</p>
                    <ul className={`ul-braed`}>
                        <li><p className="text text_type_main-small">Краторная булка N-200i</p></li>
                        <li><p className="text text_type_main-small">Флюоресцентная булка R2-D3</p></li>
                    </ul>
                </li>
                {/*Соусы*/}
                <li id={`sauce`}>
                    <p className="text text_type_main-medium">Соусы</p>
                    <ul className={`ul-sauce`}>
                        <li><p className="text text_type_main-small">Соус Spicy-X</p></li>
                        <li><p className="text text_type_main-small">Соус фирменный Space Sauce</p></li>
                        <li><p className="text text_type_main-small">Соус традиционный галактический</p></li>
                        <li><p className="text text_type_main-small">Соус с шипами Антарианского плоскоходца</p></li>
                    </ul>
                </li>
                {/*Начинки*/}
                <li id={`filling`}>
                    <p className="text text_type_main-medium">Начинки</p>
                    <ul className={`ul-filling`}>
                        <li><p className="text text_type_main-small">Филе Люминесцентного тетраодонтимформа</p></li>
                        <li><p className="text text_type_main-small">Мясобессмертных моллюсков Protostomia</p></li>
                        <li><p className="text text_type_main-small">Говяжий метеорит (отбивная)</p></li>
                        <li><p className="text text_type_main-small">Биокотлета из марсианской Магнолии</p></li>
                        <li><p className="text text_type_main-small">Плоды фалленианского дерева</p></li>
                        <li><p className="text text_type_main-small">Кристалы марсианских альфа-сахаридов</p></li>
                        <li><p className="text text_type_main-small">Хрустящие миниральные кольца</p></li>
                        <li><p className="text text_type_main-small">Мини-салат Экзо-Плантаго</p></li>
                        <li><p className="text text_type_main-small">Сыр с астероидной плесенью</p></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Ingredients;