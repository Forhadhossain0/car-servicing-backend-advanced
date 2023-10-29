import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
// import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {

  const [user,setUser] = useState(null);
  const [loading,setloading] = useState(true);

  const createUser = (email, password) => {
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password);
};

const singIn = (email,password) => {
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password);
}

const logOut = ()=> {
 setloading(true)
 return signOut(auth);
}


useEffect(()=> {
   const unSubscribe = onAuthStateChanged(auth,currentUser => {
               setUser(currentUser)
               setloading(false)
         })

    return () => {unSubscribe();}     
},[])



  const authInfo = {
    loading,
    user,
    createUser,
    singIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
