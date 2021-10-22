import React from 'react';
import ListNav from './ListNav';
import datanav from '../nav.json'

export default function navaction() {
    return (
            <div class="col-sm-2" id="nav">
                <div class="navbar">
                    <ul class="nav nav-tabs">
                        {
                            datanav.map(element => <ListNav linkss = {element.navLink} navname = {element.navName}/>)
                        }
                    </ul>
                </div>
            </div>
    )
}
