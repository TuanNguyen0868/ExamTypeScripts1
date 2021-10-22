import React, { Component } from 'react';

export default class ListUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 1,
                    name:"Tuấn",
                    add:"Hà Nội",
                    age: 20,
                },
                {
                    id: 2,
                    name:"Nam",
                    add:"Đà Nẵng",
                    age: 21,

                },
                {
                    id: 3,
                    name:"Hoàng",
                    add:"Nam Định",
                    age: 22,

                }
            ]
        }
    }
    render() {
        return  <div>
                    <table  >
                        <thead>
                        <tr >
                            <th>Id</th>
                            <th>Name</th>
                            <th>Add</th>
                            <th>Age</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map((item)=>{
                                return <UserInfo user={item} key={item.id}/>
                            })
                        }
                        </tbody>
                    </table>
                </div>
    }

}
function UserInfo(props){
    return <tr>
        <td>{props.user.id}</td>
        <td>{props.user.name}</td>
        <td>{props.user.add}</td>
        <td>{props.user.age}</td>
    </tr>
}

 