import randomColor from "randomcolor";
import { useEffect, useState } from "react"

function useMagicColor() {
    const [color, setColor] = useState('green')
    
    useEffect(() => {
        const intervalRef = setInterval(() => {
            const newColor = randomColor();
            setColor(newColor)
        }, 100);
        return () => {
            clearInterval(intervalRef)
        }
    })
    
    
    return color
}
export default useMagicColor