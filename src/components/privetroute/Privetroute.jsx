import {  useContext } from "react";
import {  Navigate } from "react-router";
import { AuthContext } from "../provider/Authprovider";


const Privetroute = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    if(loading){
      return   <progress className="progress progress-info w-56"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate  to={'/login'} replace > </Navigate>;
};

export default Privetroute;