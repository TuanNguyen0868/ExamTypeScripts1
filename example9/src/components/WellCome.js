import React, { Component } from 'react';
// import Buy from './Buy';

export default class WellCome extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text:'Chào mày !!!',
            count: 0
        }
    }
    //trong class thi khong can khai bao const
    countup = ()=>{
        //cach 1
        // var c = this.state.count
        // c++
        // this.setState({count: c})
        //cach 2
         this.setState((prevSate)=>{
            return {count: prevSate.count +1}
         })
    }
    

    render() {
        return(
        <div>
            <p>Hello Sir !! ID : {this.props.id}...... Name : {this.props.name}... FullName : {this.props.fullName} </p>
            <p>{this.state.text}</p>
            <button onClick={()=>{
                this.setState({text:'Chào mày ahi hi hi hi'})
            }}>Change Me</button><br></br>

            <button onClick={this.countup}>Count up {this.state.count}</button><br></br>
            {this.state.count > 0 && <BuyPro/>}
            <Logout/>
        </div>
        )
    } 

}
function BuyPro(){
    return(
        <div>
            <button onClick={()=>{
                alert("Anh zai đã mua thành công ")
            }}>Buy Nè</button>
        </div>
    )
}

class Logout extends Component{
    render(){
        return (
        <a href="sds" >Logout</a>
        )
    }
}