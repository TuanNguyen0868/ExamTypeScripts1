import React, { useState } from 'react'


export default function ProductInfo(props) {
    const [count, setCount] = useState(0);
    
    
    return (
        <tr prop-id={props.user.proId}>
            <td>{props.user.proId}</td>
            <td>{props.user.proName}</td>
            <td>{props.user.proPrice}</td>
            <td>
            <img src={props.user.proImge} alt="anh ne" width="150px" height="200px" onClick={()=>setCount(count+1)}/>
            </td>
            <td>{count}</td>
            <td>{(props.user.count) * (props.user.proPrice)}</td>
    </tr>
    )
}

