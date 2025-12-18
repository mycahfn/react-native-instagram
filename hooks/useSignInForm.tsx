import { useAuthStore } from "@/utils/authStore";
import { FIREBASE_AUTH } from "@/utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { useState } from "react";
import { Alert } from 'react-native';

interface FirebaseAuthError {
    code: string;
    message: string;
    name: string;
}

const isFirebaseAuthError = (err: any): err is FirebaseAuthError => {
    return typeof err === 'object' && err !== null && 'code' in err && 'message' in err;
};


export default function useSignInForm() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const { logIn, setUserData } = useAuthStore()

    const handleLogin = () => {
        const signIn = async () => {

            if (name === '') {
                Alert.alert("", "Ingresa tu nombre de usuario, correo electrónico o número de celular para iniciar sesión.")
                return
            }

            if (password === '') {
                Alert.alert("Ingresa tu contraseña para iniciar sesión")
                return
            }


            try {
                setIsLoading(true)
                const response = await signInWithEmailAndPassword(FIREBASE_AUTH, name, password)
                const user = response.user
                
                setUserData({
                    uid: response.user.uid,
                    email: response.user.email,
                    displayName: response.user.displayName,
                    photoURL: response.user.photoURL,
                    emailVerified: response.user.emailVerified,
                })

                logIn()
        
                return response
            } catch (error) {
                console.log(error)
                if (isFirebaseAuthError(error)) {
                    if (error.code === "auth/invalid-email") {
                        Alert.alert("Este correo es inválido.")
                    }

                    if (error.code === "auth/invalid-credential") {
                        Alert.alert("El correo eléctonico o la contraseña son inválidas.")
                    }
                } else {
                    console.error("An unexpected error occurred:", error);
                }
            } finally {
                setIsLoading(false)
            }
        }
        signIn()

    };

    const handleSignUp = () => {
        createUserWithEmailAndPassword(FIREBASE_AUTH, name, password)
        .then((userCredential: UserCredential) => {
          // Signed up 
          const user = userCredential.user
          setUserData({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
          })
          logIn()
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
        });
      
    }


    return { name, setName, password, setPassword, handleLogin, handleSignUp, isLoading }
}