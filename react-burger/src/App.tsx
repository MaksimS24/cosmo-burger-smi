import React from 'react';
import logo from './logo.svg';
import './App.css';

//components
import AppHeader from "./components/app-header/app-header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";

function App() {
  return (
      <div>
        <AppHeader/>
        <main>
          <BurgerIngredients/>
        </main>
      </div>
  );
}

export default App;
