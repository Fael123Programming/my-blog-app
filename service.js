import {
    doc, getDoc
} from 'firebase/firestore';
import { firestore } from "./firebase.config";
import { getAuth } from 'firebase/auth';

const fetchUserDataAsync = async _ => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (!currentUser)
        return null;
    const docRef = doc(firestore, 'users', currentUser.email);
    const theDoc = await getDoc(docRef);
    let userData = {
        id: theDoc.get('id'),
        name: theDoc.get('name'),
        surname: theDoc.get('surname'),
        dateOfBirth: theDoc.get('dateOfBirth'),
    };
    return userData;
};


export {
    fetchUserDataAsync
};