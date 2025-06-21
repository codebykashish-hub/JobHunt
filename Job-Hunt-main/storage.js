import firebase from './firebaseConfig';

const storage = firebase.storage();

export const uploadFile = async(file, userId) =>{
    const storageRef = storage.ref();
    const fileRef = storageRef.child(`${userId}/${file.name}`);
    await fileRef.put(file);
    const fileUrl = await fileRef.getDownloadURL();
    return fileUrl;
}