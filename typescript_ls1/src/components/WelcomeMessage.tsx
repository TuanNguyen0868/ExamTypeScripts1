import { Box } from "@material-ui/core"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"



interface WelcomeMessageProps {
    position: string       
    country?: string  
}

const WelcomeMessage = ({position , country='Thanh Hoá'} : WelcomeMessageProps) => {
    
    const {authInfo: {userName}} = useContext(AuthContext)
    return (
        <div>
            <Box mb={1}>
            WelCome - {userName} - {position} from {country}
            </Box>
        </div>
    )
}

export default WelcomeMessage
