import { signInWithPopup, signOut, getAdditionalUserInfo } from "firebase/auth";
import { auth, googleProvider } from "./config";
import { createUserProfile } from "./user-service";

export const signInWithGoogle= async () => {
    try{
        const result = await signInWithPopup(auth, googleProvider);
        const {isNewUser}=getAdditionalUserInfo(result);

        if(isNewUser){
            await createUserProfile((result.user.uid),{
                email: result.user.email,
                name: result.user.displayName,
            })
        }
        console.log(result);
    }catch (error ){
        console.error(error);
    }
}; 


export const logout= async () => {
    try {
        await signOut(auth);
    }catch(error){
        console.error({error});
    }
}; 