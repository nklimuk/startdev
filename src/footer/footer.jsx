import React from 'react';
import  c from './footer.module.css';

const footer = () => {
    return (
        <div class={c.footer}>
            <ul class={c.item}>
                <li>разработчк</li>
                <li>Nikolay</li>
                <li>шлет</li>
                <li>привет</li>
                <li>саля</li>
                <li>маляй</li>
            </ul>
            <ul class={c.item}>
                <li>пока</li>
                <li>не все</li>
                <li>права</li>
                <li>защищены</li>
            </ul>
        </div>
    )
}

export default footer;