import React from 'react';
import c from './menu.module.css'

const menu = () => {
    return (
        <div className={c.menu}>
            <a href="/frontend"> <div className={`${c.active}`}>FrontEnd</div></a>
            <a href="/backEnd"><div>BackEnd</div></a>
            <a href="/tasks"><div>Задачи</div></a>
            <a href="/testQuestions"><div>Контрольные вопросы</div></a>
            <a href="/resources"><div>Рекомендованные ресурсы</div></a>
        </div>
    )
};

export default menu;