import * as React from 'react';
import './app-header.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => {
    return (
        <header className={`pr-5 pl-5`}>
            <nav>
                <ul className={`ul-header`}>
                    {/*Конструктор*/}
                    <li className={`li-header`}>
                        <span className={`span-header`}>
                            <BurgerIcon type='primary'/>
                            <p className={`ml-2`}>Конструктор</p>
                        </span>
                    </li>

                    {/*Лента заказов*/}
                    <li className={`li-header ml-6`}>
                        <span className={`span-header`}>
                            <ListIcon type='primary'/>
                        <p className={`ml-2`}>Лента закзаов</p>
                        </span>
                    </li>
                </ul>

                {/*Лого*/}
                <object className={`logo`}>
                    <Logo/>
                </object>

                {/*Личный кабинет*/}
                <object className={`lk`}>
                    <span className={`span-header`}>
                    <ProfileIcon type='primary'/>
                    <p className={`ml-2`}>Личный кабинет</p>
                    </span>
                </object>
            </nav>

        </header>
    );
}

export default AppHeader;