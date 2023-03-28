import { Navigate } from "react-router-dom";
import { LOGIN_URL } from "../../constants/url";
import { useUser } from "../../contexts/userContext";


export function PrivateRoute({children}){
    console.log("Imprimiendo UseUser", useUser())
    const {user, isLoading}=useUser();
    if(isLoading){
        return <h1 className="font-bold text-3xl p-20"> Loading User</h1>
    }

    if(!isLoading && !user){
        return <Navigate to={LOGIN_URL}/>
    }
    return children
}