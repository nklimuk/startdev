import React from 'react';
import './App.css';
import Header from './header/header';
import Content from './content/content';
import Footer from './footer/footer';
import Menu from './menu/menu';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className='header'>
                <Header/>
            </header>
            <div className='content'>
                <Content/>
            </div>
            <div className='menu'>
                <Menu/>
            </div>
            <footer className='footer'>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
