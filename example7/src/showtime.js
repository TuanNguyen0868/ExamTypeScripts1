import React, { useState } from 'react'

const Showtime = () => {
    const [CurrentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    setInterval(()=> setCurrentTime(new Date().toLocaleTimeString()), 1000);
    
    return (
        <div>
            <h2> {CurrentTime}.</h2>
        </div>
        
    )
    
}
export default Showtime

