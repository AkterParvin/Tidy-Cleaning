/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from '../../../firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [newUser, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // for create a new user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // for login registered user 
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // logOut function 
    const logOut = () => {
        setLoading(true);
        return (
            signOut(auth)
                .then(() => {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "User Logged Out",
                        showConfirmButton: false,
                        timer: 1500
                    });

                })
                .catch(error => console.log(error))
        )
    }
    // on AuthState Change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,
            (currentUser )=> {
                const userEmail = currentUser?.email || newUser?.email;
                const loggeduser = { email: userEmail };
                setUser(currentUser);
                setLoading(false);
                console.log("showing User status from Auth-useEffect", currentUser);
                if (currentUser) {
                    
                    axios.post('http://localhost:3000/jwt',loggeduser,{withCredentials:true})
                        .then(res => {
                            console.log('token response',
                                res.data);
                    })
                } else {
                    axios.post('http://localhost:3000/logout',loggeduser,{withCredentials:true})
                        .then(res => {
                            console.log(res.data);
                    })
                }
            })
        return () => {
            unSubscribe();
        }
    }, [newUser?.email]);




    // goggleSignInProcess 
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = (result.user);
                setUser(user);
                console.log(user);

            })
            .catch(error => {
                console.log('error', error.message)
            })
    }


    const authInfo = {
        newUser, createUser, logOut, loginUser, googleLogin, loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;