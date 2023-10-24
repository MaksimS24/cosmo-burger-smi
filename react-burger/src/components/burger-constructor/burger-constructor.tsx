import * as React from 'react';
import './burger-constructor.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element.css';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = () => {

    return (
        <>
            <main className={`main-burgCons p-4`}>
                <div style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'column', gap: '10px'}}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={'img'}
                    />

                    <div className={`consElem`}>
                        <DragIcon type='primary'/>
                        <ConstructorElement
                            text="Соус традиционный галактический"
                            price={30}
                            thumbnail={'img'}
                        />
                    </div>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail={'img'}
                    />
                    <span className={`check mt-10`}>
                        <p className={"text text_type_digits-medium"}>430</p>
                        <CurrencyIcon type="primary"/>
                        <Button htmlType="button" type="primary" size="medium">
                        Оформить заказ
                    </Button>
                    </span>

                </div>
            </main>

        </>
    );
}

export default BurgerConstructor;