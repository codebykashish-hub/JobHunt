import firebase from '../firebaseConfig';

export const signUp = async(email, password) => {
    const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return user;
};
export const signIn = async(email, password) => {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    return user;
};

export const signOut = async() =>{
    await firebase.auth().signOut();
};