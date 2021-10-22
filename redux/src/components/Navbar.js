import React from 'react'
import { useSelector } from "react-redux";
import { todoSelector } from "../store";
const Navbar = () => {
    const todos = useSelector(todoSelector)
    
    return (   
        <div className='navbar'>
            <h1>WellCome To My Page</h1>
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>Product</li>
                <li>Total : {todos.length}</li>
            </ul>
        </div>
    )
}

export default Navbar

