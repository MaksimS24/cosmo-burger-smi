import './app-header.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => {
    return (
        <header>
            <nav className='p-16'>
        <ul className='m-0 p-0'>
        <li>
            <BurgerIcon type='primary'/>
        <span className='p-1'>
        Конструктор
        </span>
        </li>

        <li>
        <ListIcon type='primary'/>
        <span className='p-1'>
            Лента закзаов
    </span>
    </li>

    <li>
    <Logo/>
    </li>

    <li>
    <ProfileIcon type='primary'/>
    <span className='p-1'>
        Личный кабинет
    </span>
    </li>
    </ul>

    </nav>

    </header>
);
}

export default AppHeader;