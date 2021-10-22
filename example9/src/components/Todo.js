import React from 'react';
export default function Todo() {
    function  Hello(name){
        return "Xin chao : " + name
    }
    return (
    <>
        <div>
            <h3 style={{fontSize: 30, color: "red"}}>{Hello("Anh tuan dep trai !!! ")}</h3>
            <Baby name="Ư ư ư ư" cssStyle="red"/>
            <Baby name="Ư ư ư ư"  cssStyle="green"/>
        </div>
        </>
    )
    function Baby(props){
        let styled = props.cssStyle === "red" ? {fontSize: 50, color: "red"} : {fontSize: 30, color: "green"}
        return(<>
            <p style={styled}>{props.name}</p>
        </>
        )
    }
}
