import React from 'react'



export default function Numberlist(props){
    const numbers = props.numbers;
    const listnumbers = numbers.map((number)=><li key={number.toString()}>{number}</li>)
    return(
        <ul>
            {listnumbers}
        </ul>
    )
}
