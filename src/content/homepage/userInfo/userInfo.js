import React from 'react';
import c from './userInfo.module.css';

const userInfo = (props) => {
    return (
        <div className={c.content}>
            <h1>Ваши успехи:</h1>
            <div>
                Пройдено разделов: {props.part}
            </div>
            <div>
                Пройдено тестов: {props.test}
            </div>
            <div>
                Ответы на вопросы: {props.question}
            </div>
        </div>
    )
};

export default userInfo;