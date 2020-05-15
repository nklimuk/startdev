import React from 'react';
import c from './header.module.css';

const header = () => {
    return (
        <header className={c.header}>
            <div className={c.logo}><img src='./../../public/logoza.ru1.png'></img></div>
            <div className={c.title}> START DEVELOP</div>
            <div className={c.icon}><img src='public/logoza.ru.png'/></div>
        </header>
    )
}

export default header;