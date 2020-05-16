import React from 'react';
import './App.css';
import './cssReset.css';
import Header from './header/header';
import Content from './content/homepage/content';
import Footer from './footer/footer';
import Menu from './menu/menu';
import FrontPage from "./content/frontPage/frontPage";
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
    return  (
        <BrowserRouter>
            <div className="app-wrapper">

                <Header/>
                <Route path={'/homepage'} component={ Content }/>
                <Route path={'/frontend'} component={ FrontPage }/>
                {/*<Content/>*/}
                {/*<FrontPage/>*/}
                <Menu/>
                <Footer/>
            </div>
        </BrowserRouter>
        )

}

export default App;
