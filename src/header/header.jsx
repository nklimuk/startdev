import React from 'react';
import c from './header.module.css';

const header = () => {
    return (
        <header className={c.header}>
            <div className={c.logo}>
                <a href={'/homepage'}>
                    <img src='./../../public/logoza.ru1.png'></img>
                </a>
            </div>
            <div className={c.title}>
                <div className={c.text}><a href={'/homepage'}>
                    START DEVELOPER
                </a></div>
                <div><a href={'/lk'} className={c.login}> <img src='public/logoza.ru.png'/></a></div>
            </div>


        </header>
    )
}

export default header;