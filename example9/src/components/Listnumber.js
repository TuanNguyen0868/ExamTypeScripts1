import React, { Component } from 'react';

export default class Listnumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: [
                {
                    id: 1,
                    name:"Tuấn",
                    add:"Hà Nội",
                },
                {
                    id: 2,
                    name:"Nam",
                    add:"Đà Nẵng",
                },
                {
                    id: 3,
                    name:"Hoàng",
                    add:"Nam Định",
                }
            ]
        }
    }
    render() {
        // let numberArray = this.state.number.map((item)=>{
        //   return <div key={item.id}>
        //             <li>Mã nhân viên : {item.id}</li>
        //             <li >Cán bộ : {item.name}</li>
        //             <li> Quê ở {item.add}</li><br></br>
        //         </div>
        // })
        return <div>
            {
                this.state.number.map((item)=>{
                    return  <div key={item.id}>
                                <p>Employes ID : {item.id}</p>
                                <p >Employes Name : {item.name}</p>
                                <p> Employes Address {item.add}</p><br></br>
                            </div>
                })
            }
            </div>
    }

}


 