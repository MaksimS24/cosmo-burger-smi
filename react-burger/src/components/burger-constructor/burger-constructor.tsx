import * as React from 'react';
import './burger-constructor.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element.css';
import {ConstructorElement, DragIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components';

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
                            text="Краторная булка N-200i (верх)"
                            price={50}
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
                    <Button htmlType="button" type="primary" size="medium">
                        Нажми на меня
                    </Button>
                </div>
            </main>

        </>
    );
}

export default BurgerConstructor;