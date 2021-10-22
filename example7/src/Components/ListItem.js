import React from 'react';
export default function ListItem(props) {
    return (
        <>
                <div class="lsItem">
                    <h3 class="item">{props.proName}</h3>
                    <img class="picture" src={props.proUrl} alt=""></img>
                    <span>{props.proTitel}</span>
                </div>
        </>
    
    );
}
