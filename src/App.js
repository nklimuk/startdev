import React from 'react';
import './App.css';
import Header from './header/header';
import Content from './content/homepage/content';
import Footer from './footer/footer';
import Menu from './menu/menu';

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Content/>
            <Menu/>
            <Footer/>
        </div>
    );
}

export default App;
