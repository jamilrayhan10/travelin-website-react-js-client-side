import {
    getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,
    signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Login/Firebase/Firebase.init";


initializeAuthentication();

const useFirebase = () => {
    // user State
    const [user, setUser] = useState({});
    // success state
    const [success, setSuccess] = useState('');
    // error state
    const [error, setError] = useState('');
    // name
    const [name, setName] = useState('');
    // email
    const [email, setEmail] = useState('');
    // password
    const [password, setPassword] = useState('');
    // show hide 
    const [isLoading, setIsLoading] = useState(true);
    // auth provider
    const auth = getAuth();
    // google provider
    const googleProvider = new GoogleAuthProvider();

    // google sign in
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    // create user with email and password
    const registerUserEmailAndPassword = () => {
        if (password.length < 6) {
            setError('Password must be at least 6 character');
            return;
        }
       return createUserWithEmailAndPassword(auth, email, password)
            
    }

    // update user 
    const updateUser = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then((result) => {
            console.log(result.user);
        }).catch((err) => {
            console.log(err.message);
        });
    }

    // verify email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                setSuccess('Email verification sent!');
                setError('');
            });
    }

    // login user email and password
    const loginUserEmailAndPassword = () => {
       return signInWithEmailAndPassword(auth, email, password)  
    }

    // const password reset
    const passwordResetEmail = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // 
                setSuccess('Password reset email sent!');
                setError('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    // logout 
    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(err => {
                console.log(err.message);
            })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        success,
        error,
        setError,
        setSuccess,
        signInUsingGoogle,
        setName,
        setEmail,
        setPassword,
        setUser,
        registerUserEmailAndPassword,
        updateUser,
        verifyEmail,
        loginUserEmailAndPassword,
        passwordResetEmail,
        isLoading,
        setIsLoading,
        logout
    }
}

export default useFirebase;