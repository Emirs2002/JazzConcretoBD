import { db } from "./config";
import { addDoc, doc, setDoc, collection } from "firebase/firestore";

export async function createNewMember(data){
    
    const docRef = doc(collection(db, "members"))

    await setDoc(docRef, data)
    
}