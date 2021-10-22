import React from 'react'

export default function InfoPro(props) {
    return (
        <div className='infoproduct'>
            <h3> Name: {props.name}</h3>
            <p>Age :{props.age}</p>
        </div>
    )
}
