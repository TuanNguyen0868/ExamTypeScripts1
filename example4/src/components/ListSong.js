import React from 'react'
import data from '../song.json'
import Song from './Song'

export default class ListSong extends React.Component {
    constructor(props){
        super(props)
        this.state={data}
    }
    render(){
        return (<div className="section-content-song">
            
                    {this.state.data.map((item=>{
                        return <>
                        <Song songs={item}/>
                        </>
                    }))}
            </div>)
    }
}