import React from 'react';
import  c from './footer.module.css';

const footer = () => {
    return (
        <div class={c.footer}>
            <ul class={c.item}>
                <ol>разработчки</ol>
                <ol>шлют</ol>
                <ol>привет</ol>
                <ol>всем</ol>
            </ul>
            <ul class={c.item}>
                <ol>все</ol>
                <ol>права</ol>
                <ol>защищены</ol>
            </ul>
        </div>
    )
}

export default footer;