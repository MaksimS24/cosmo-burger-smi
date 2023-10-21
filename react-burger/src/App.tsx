import React from 'react';
import './App.css';

//components
import AppHeader from "./components/app-header/app-header";
import MainPage from "./components/pages/main-page";

function App() {
    return (
        <div>
            <AppHeader/>
            <main>
                <MainPage/>
            </main>
        </div>
    );
}

export default App;
