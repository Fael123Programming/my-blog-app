import {
    doc, 
    getDoc,
    query,
    where,
    getDocs,
    collection,
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

const fetchRelevantDiscussionsAsync = async _ => {
    const docRef = await getDoc(doc(firestore, 'posts', 'data'));
    return docRef.get('posts');
};

const fetchUserDataOfAsync = async (userId, fields) => {
    const q = query(collection(firestore, 'users'), where('id', '==', userId));
    const querySnapshot = await getDocs(q);
    const userData = {}
    let data;
    for (let field of fields) {
        try {
            data = querySnapshot.docs[0].get(field);
            userData[field] = data;
        } catch (err) {}
    }
    return userData;
};

export {
    fetchUserDataAsync,
    fetchRelevantDiscussionsAsync,
    fetchUserDataOfAsync
};