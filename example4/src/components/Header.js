import React from 'react';
import logo from '../logotun.png'

export default function Header() {
    return (<>
        <div className="header-content">
            <img className='logo1' src={logo} alt='TiTiKaKa.com'></img>
            
        </div>
        <div>
        <p className='logo-text'>Gods always true !!</p>
        </div>
        </>
    )
}
