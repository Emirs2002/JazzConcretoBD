import { collection, doc, getDocs, setDoc,query,where } from "firebase/firestore";
import { db } from "./config";
import { storage } from "./config"
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";

export async function createUserProfile(userId, data){
    return setDoc(doc(db,"users",userId),data);
}

export async function getUserProfile(email){
    const userQuery =query(collection(db, "users"), where("email","==",email));

    const results = await getDocs(userQuery);

    if(results.size>0){
        const users = results.docs.map((item) =>({
            ...item.data(),
            id: item.id,
        }) );

        const [user]=users;
        return user;
    }else{
        return null;
    }
}


export async function uploadPhoto(file, fileName) {
  
    const usersImagesRef = ref(storage, `profilepics/${fileName}`);
  
    await uploadBytes(usersImagesRef, file);
  
    const imgUrl = await getDownloadURL(usersImagesRef)
  
    return imgUrl
    
  }