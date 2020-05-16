import  React from 'react';
import c from './frontPage.module.css';

const FrontPage = (props) => {
    return (
        <div className={c.list}>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>js</li>
                <li>Паттерны разработки</li>
                <li>Предпроцессоры</li>
                <li>Задания</li>
                <li>Тесты</li>
                <li>Контрольные вопросы</li>
            </ul>
        </div>
    );

}
export default FrontPage;