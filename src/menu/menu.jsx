import React from 'react';
import c from './menu.module.css'

const menu = () => {
    return (
        <div className={c.menu}>
            <div className={`${c.active}`}>FrontEnd</div>
            <div>BackEnd</div>
            <div>Задачи</div>
            <div>Контрольные вопросы</div>
            <div>Рекомендованные ресурсы</div>

        </div>
    )
};

export default menu;