import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Component/firebase/firebase.config";


const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth , email, password)
    }
    // logout
    const logOut = () =>{
        return signOut(auth)
    }
    // Authprovider
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const userInfo = {
        user,
        loading,
        createUser,
        logOut,
        signIn,

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;