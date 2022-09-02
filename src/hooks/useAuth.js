import { useContext } from "react";
import { AuthContext } from "../context";

const useAuth = () => {
    const { token,setToken } = useContext(AuthContext);

    const Login = () => {
        setToken(true);
    }

    const Logout = () => {
        setToken(false);

    }
    return { Login, Logout, token, setToken };
}

export default useAuth;