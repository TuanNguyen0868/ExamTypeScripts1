import React from 'react'

export default class NameForm extends React.Component {
    constructor(props){
        super(props)
        this.state={value: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({value: event.target.value})
    }
    handleSubmit(event){
        alert('Tài khoản có tên : ' + this.state.value + ' đã được đăng nhập');
        event.preventDefault();
    }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                </label>
                
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}
