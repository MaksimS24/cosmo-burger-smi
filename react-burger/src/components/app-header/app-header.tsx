import * as React from 'react';
import styles from './app-header.module.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => {
    return (
        <header>
            <nav>
                <ul className={styles.ulHeader}>
                    {/*Конструктор*/}
                    <li className={styles.liHeader}>
                        <span className={styles.spanHeader}>
                            <BurgerIcon type='primary'/>
                            <p className={`ml-2`}>Конструктор</p>
                        </span>
                    </li>

                    {/*Лента заказов*/}
                    <li className={styles.liHeader}>
                        <span className={styles.spanHeader}>
                            <ListIcon type='primary'/>
                        <p className={`ml-2`}>Лента заказов</p>
                        </span>
                    </li>
                </ul>

                {/*Лого*/}
                <object className={styles.logo}>
                    <Logo/>
                </object>

                {/*Личный кабинет*/}
                <object className={styles.lk}>
                    <span className={styles.spanHeader}>
                    <ProfileIcon type='primary'/>
                    <p className={`ml-2`}>Личный кабинет</p>
                    </span>
                </object>
            </nav>

        </header>
    );
}

export default AppHeader;