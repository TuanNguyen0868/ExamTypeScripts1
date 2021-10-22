import React, { useState , useEffect} from 'react'

export default function FnCount() {
    const [count, setCount] = useState(0);
    const [action, setAction] = useState('');
    const [scrollPosition, setScrollPosition] = useState(0);
    


    useEffect(() => {
        document.title = `Bin Nè ${count}`;
        console.log('useEffect')
        return () =>{
            //Luôn luôn clean trước
            console.log('CleanUp useEffect')
        }
    }, [count]);


    useEffect(()=>{
        fetch(`https://reqres.in/api/${action}`)
        .then((res) => console.log({res}))
        .catch((err) => console.log(err))
    },[action]);
    const handleScroll = ()=>{
        setScrollPosition(window.scrollY)
    }
    useEffect(()=>{
        document.addEventListener('scroll', handleScroll())
        return ()=>{
            //Sẽ hoạt động như là một componentWillUnmount (Dọn dẹp useEffect thực thi trc đó)
            document.removeEventListener('scroll', handleScroll())
        }
    },[])
    
    return (
        <div style={{height: '1000px'}}>
            <p>You are clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
            <button onClick={()=>setCount(0)}>Reset</button><br></br>
            <button onClick={()=> setAction("users")}>Get Users</button>
            <button onClick={()=> setAction("Comments")}>Get Comments</button>


            <p style={{position: 'fixed', bottom: '20px', right: '30px'}} onMouseOver={handleScroll}>Hover to Display Possition Scroll : {scrollPosition}</p>
        </div>
    )
}
