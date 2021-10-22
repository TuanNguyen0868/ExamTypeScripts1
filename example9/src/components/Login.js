import React, { useState } from 'react';


export default function Login(props) {
    const [username , setUsername ] = useState("")
    const [password , setPassword ] = useState("")
    return (
        <div>
            <form>
                <div>
                <label>Account_ </label>
                <input type="text" value={username} onChange={(event)=>{
                    setUsername(event.target.value)
                }}></input>
                <p>Tai khoan cua ban la : {username}</p>
                </div>
                
                
                <div>
                <label>PassWord </label>
                <input type="password" value={password} onChange={(event)=>{
                    setPassword(event.target.value)
                }} ></input>
                <p>Pass của anh nè hi hi : {password}</p>
                {password.length < 8 ? <p>Warning !!! Mật khẩu bắt buộc lớn hơn 8 ký tự !</p> : <p>Mật khẩu hợp lệ đó anh zai !!! </p>}
                </div>
                
                
                
                <button onClick={props.hi}>Login</button><br></br>
                <span>You don't have ACC</span>
            </form>
        </div>
    )
}
