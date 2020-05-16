import React from 'react';
import c from './content.module.css';
import UserInfo from './userInfo/userInfo';


const content = () => {
    let userInfo = {
        'part': 0,
        'test': 0,
        'question': 0,
    };

    return (
        <div className={c.content}>
            <h1>Главная страница</h1>
            <h3>
                Освойте востребованную профессию с нуля и зарабатывайте в любых условиях
            </h3>
            <div>
                На нашем сайте вы сможите развиваться и совешествоваться!
                пройдите полный курс и получите сертифекат "Start Developer"
                после прохождение вы сможите самостоятельно создавать сайты используя соременные технологии и паттерны разработки
            </div>
            <UserInfo part={userInfo.part} test={userInfo.test} question={userInfo.question}/>
        </div>
    )
};

export default content;