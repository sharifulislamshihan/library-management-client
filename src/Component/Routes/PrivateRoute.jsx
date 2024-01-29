import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    // location for redirect after login
    const location = useLocation();
    
    if(loading){
        return null;
    }
    
    if (user) {
        return children
    }

    // state declare to redirect after login
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;