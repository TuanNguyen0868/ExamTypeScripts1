import React from 'react';
import ListItem from './ListItem';
import data from '../pro.json';
// const {UseStatess} = React;

export default function proaction() {
    // const [counter , setCounter] = UseStatess(0);
    return (
            <div class="col-sm-10" id="pro">
                <div class="content">
                    <div class="list-item" >
                        {
                            data.map(element => <ListItem proName = {element.proName} proUrl = {element.proUrl} proTitel = {element.proTitle}/>)
                        }
                        {/* <p>
                            {counter}
                        </p>
                        <button onClick={() => {
                            setCounter(counter + 1);
                        }}>Buy</button>    */}
                    </div>
                </div>
            </div>
            )
}
