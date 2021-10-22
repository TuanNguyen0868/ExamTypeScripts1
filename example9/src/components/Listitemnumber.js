import React from 'react'

export default function Listitemnumber() {
    const listnumber = [0 ,1, 2, 3, 4, 5, 6]
    const doublenumber = listnumber.map((listnumber)=>
        <li key={listnumber.toString()}>{listnumber*2}</li>)
    
    return (<>
        <div>
            <ul>{doublenumber}</ul>
        </div>
        </>
    )
}
