import React from 'react'
import './person.css'


const person = (props) => {
    return (
        <div>
            <p>I'm a {props.name} and I'm {props.age}</p>
        </div>
    )
}


export default person;