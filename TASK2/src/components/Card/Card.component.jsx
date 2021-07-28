import React from 'react'
import './card.css'
export const Card = (props) => {
    return <div className="card">
        <img alt={`human ${props.human.id}` } src={`${props.human.avatar}`} />
        <h1>{props.human.first_name} {props.human.last_name} </h1>
        <h2>{props.human.email}</h2>
    </div>
}