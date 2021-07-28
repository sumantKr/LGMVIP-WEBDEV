import React from 'react';
import './cardList.css'
import {Card} from '../Card/Card.component.jsx'
export const CardList = (props) => {
    return <div className="card-list">
    {
        props.monster.map(human => {
            // console.log(human.id)
           return <Card key={human.id} human={human} />
        })
    }
    </div>

}