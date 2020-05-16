import React from 'react';
import  c from './footer.module.css';

const footer = () => {
    return (
        <div class={c.footer}>
            <ul class={c.item}>
                <ol>разработчк</ol>
                <ol>Nikolay</ol>
                <ol>шлет</ol>
                <ol>привет</ol>
                <ol>саля</ol>
                <ol>маляй</ol>
            </ul>
            <ul class={c.item}>
                <ol>пока</ol>
                <ol>не все</ol>
                <ol>права</ol>
                <ol>защищены</ol>
            </ul>
        </div>
    )
}

export default footer;