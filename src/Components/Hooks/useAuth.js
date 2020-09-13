import {useEffect,useState} from 'react';

export function useAuth (authFirebase) {
    const [authentication,setAuthentication]=useState(null);
    const provider=new authFirebase.GoogleAuthProvider();
    const auth=authFirebase();
    const login=()=>auth.signInWithPopup(provider);
    const logout=()=>auth.signOut()
    .then()
    .catch(err=>console.error())
useEffect(()=>{auth.onAuthStateChanged(user=>{
    if (user){
        setAuthentication(user);
    }
})
    },[auth]);

    return {authentication,login,logout};
}