import React, { Component } from 'react';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            username:'',
            password:'',
            city:'HN',
            about:'',

        }
    }
    submitRegister = () => {
        alert('Your Name : ' + this.state.fullname +'\n' 
        + 'Your Account : ' + this.state.username +'\n'
        + 'Your PassWord : ' + this.state.password +'\n'
        + 'Your City : ' + this.state.city +'\n'
        + 'Your Description : ' + this.state.about 
        )
    }



    setParam = (event) =>{
       let name = event.target.name
       let value = event.target.value
       
       this.setState({[name] : value})
    }



    render() {
        return (
            <form>
                <div>YourName: <input type='text' name='fullname' value={this.state.fullname} 
                onChange={this.setParam}></input>
                <p>You Entered : {this.state.fullname}</p>
                </div>
                
                
                <div>UserName: <input type='text' name='username' value={this.state.username}
                onChange={this.setParam}></input>
                <p>You Entered :{this.state.username}</p>
                </div>
                
                
                <div>PassWord: <input type='password' name='password' value={this.state.password}
                onChange={this.setParam}></input>
                <p>You Entered :{this.state.password}</p>
                </div>
                
                
                <div>Address:
                    <select name='city' value={this.state.city} onChange={this.setParam}>
                        <option value='HN'>Hà Nội</option>
                        <option value='DN'>Đà Nẵng</option>
                        <option value='TH'>Thanh Hoá</option>
                        <option value='LC'>Lào Cai</option>
                        <option value='DB'>Điện Biên</option>
                    </select>
                    <p>You Selected : {this.state.city}</p>
                </div>
                
                
                <div>Description:<textarea name='about' value={this.state.about}
                onChange={this.setParam}></textarea>
                <p>You Entered :{this.state.about}</p>
                </div>
                
                
                <div>
                    <button onClick={this.submitRegister}>Register</button>
                </div>
            </form>
        );
    }
}