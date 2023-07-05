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
    let docRef, data;
    const posts = {};
    for (let i = 10; i > 0; i--) {
        docRef = await getDoc(doc(firestore, 'posts', i.toString()));
        data = docRef.get('data');
        if (data)
            posts[i] = data;
    }
    return posts;
};

const fetchUserDataOfAsync = async (userId, fields) => {
    const q = query(collection(firestore, 'users'), where('id', '==', userId));
    const querySnapshot = await getDocs(q);
    let data = {};
    for (let field in fields) {
        try {
            data[field] = querySnapshot[0].get(field);
        } catch (err) {
            console.log(err.message);
        }
    }
    return data;
};

export {
    fetchUserDataAsync,
    fetchRelevantDiscussionsAsync,
    fetchUserDataOfAsync
};