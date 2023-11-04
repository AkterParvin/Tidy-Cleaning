/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import app from '../../../firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useQuery } from "@tanstack/react-query";

export const AuthContext = createContext(null);
const auth = getAuth(app)


// const userStatusQuery =() => {
//     const user =  onAuthStateChanged(auth);
//     return user;
// }
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create a query key for user status 
    // const userStatusKey = 'userStatus';

    // use TanStackQuery to get the user status 
    // const { data: currentUser } = useQuery(userStatusKey, userStatusQuery);

    // for creating a new User 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // Login the User
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // logOut Function 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // on AuthState Change

    



    // goggleSignInProcess 
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true);
        signInWithPopup(auth,googleProvider)
            .then(result => {
                const user = (result.user);
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                console.log('error', error.message);
        })
    }


    const authInfo = {
        createUser,  logOut, loginUser, googleSignIn, loading 
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;