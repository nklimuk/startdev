import React from 'react';
import c from './header.module.css';
import {NavLink} from "react-router-dom";

const header = () => {
    return (
        <header className={c.header}>
            <div className={c.logo}>
                <NavLink to={'/homepage'}>
                    <img src='./../../public/logoza.ru1.png'></img>
                </NavLink>
            </div>
            <div className={c.title}>
                <div className={c.text}>
                    <NavLink to={'/homepage'}>
                        START DEVELOPER
                    </NavLink>
                </div>
                <div>
                    <NavLink to={'/lk'} className={c.login}>
                        <img src='public/logoza.ru.png'/>
                    </NavLink>
                </div>
            </div>


        </header>
    )
}

export default header;