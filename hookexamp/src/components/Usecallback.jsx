import React, { useState, useCallback } from 'react';
import ChildComponents from './ChildComponents';

 function Usecallback() {
    const [users , setUsers] = useState([]);

    const getData = useCallback((type)=>{
        return fetch(`https://reqres.in/api/${type}`);
    }, [])
    
    const handleClick = ()=>{
        getData('users')
        .then((res)=>res.json())
        .then((res)=>{
            const users = res.data;
            setUsers(users)
        })
    }
    return (
        <>
            <p>Data: </p>
            <button onClick={handleClick}>Get user from data</button>
            <p>{JSON.stringify(users)}</p>
            <ChildComponents getData = {getData}/>
        </>
    )
}
export default Usecallback;
