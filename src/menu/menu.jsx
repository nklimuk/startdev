import React from 'react';
import c from './menu.module.css'
import {NavLink} from "react-router-dom";

const menu = () => {
    return (
        <div className={c.menu}>
            <NavLink to="/frontend" activeClassName={c.active}>FrontEnd</NavLink>
            <NavLink to="/backEnd" activeClassName={c.active}>BackEnd</NavLink>
            <NavLink to="/tasks" activeClassName={c.active}>Задачи</NavLink>
            <NavLink to="/testQuestions" activeClassName={c.active}>Контрольные вопросы</NavLink>
            <NavLink to="/resources" activeClassName={c.active}>Рекомендованные ресурсы</NavLink>
        </div>
    )
};

export default menu;