import React from 'react'
import data from '../product.json'
import ProductInfo from './ProductInfo'

export default class Product extends React.Component {
    constructor(props){
        super(props)
        this.state={data}
    }
    render(){
        return (<div className="section-content">
            <h1 style={{textAlign:"center", color:"violet"}}>My Cart</h1>
            <table>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Image</th>
                        <th>Product Count</th>
                        <th>Product Total</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((item=>{
                        return <>
                        <ProductInfo user={item} key={item.proId}/>
                        </>
                    }))}
                </tbody>
            </table>
            </div>)
    }
}