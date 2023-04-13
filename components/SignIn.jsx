import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { GoogleAuthProvider, EmailAuthProvider, signInWithRedirect } from "firebase/auth";

const styles = {
    container: `flex justify-center items-center`,
};

const emailSignIn = (email, password) => {
    FIREBASE_AUTH.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
};

const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(FIREBASE_AUTH, provider);
};


const SignIn = () => {
    return (
        <View className={styles.container}> 
            <Button title="Sign In with Google" onPress={googleSignIn}/>
            <Button title="Sign In with Email" onPress={emailSignIn}/>
        </View>
    );
};

export default SignIn;