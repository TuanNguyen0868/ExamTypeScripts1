import React, { useEffect, useRef } from 'react'

export default function UseReference() {
     const coutRef = useRef(0)
     const ref = useRef(null)


    
     
    //  useEffect(()=>{
    //      setInterval(()=>{
    //         coutRef.current =coutRef.current + 1
    //         console.log({coutRef: coutRef.current})
    //      }, 2000)
    //  },[])
    useEffect(()=>{
        ref.current.focus()
    }, [])
    
    
    return (
        <div>
            <input type='text' ref={ref}/>
            <button>Click Me</button>
        </div>
    )
}
