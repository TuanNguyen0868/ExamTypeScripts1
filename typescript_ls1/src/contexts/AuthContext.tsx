import { createContext, ReactNode, useReducer } from "react";
import { authReducer, AuthState } from "../components/reducers/AuthReducer";
import { AuthActionType } from "../components/reducers/Types";

const {TOGGLE_AUTH} = AuthActionType


interface AuthContextProps {
    children: ReactNode
}

interface AuthContextDefault {
    authInfo: AuthState,
    toggleAuth: (userName: string) => void
}

const authDefault = {
    isAuthenticated: false,
    userName: ''
}

export const AuthContext = createContext<AuthContextDefault>({
    authInfo: authDefault,
    toggleAuth: () => null
})

const AuthContextProvider = ({children}: AuthContextProps) => {
    const [authInfo, dispatch] = useReducer(authReducer, authDefault)

    const toggleAuth = (userName: string) => dispatch({type: TOGGLE_AUTH, payload: userName})

    const authContextData = {
        authInfo,
        toggleAuth
    }
    return(
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider