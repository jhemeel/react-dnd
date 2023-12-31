import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

import Gallery from '../../components/Gallery/Gellery'
import Header from '../../components/Header/Header'
import Login from "../Authenticate/Login";


const Home = () => {

  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      user ? setAuthUser(user) : setAuthUser(null);
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out succesfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };




  return (
    <div>
      {
        authUser ?
        <>
         <Header authUser={authUser} userSignOut={userSignOut}/>
         <Gallery  authUser={authUser} userSignOut={userSignOut}/>
         </>:
         <>
        <Login/>
        </>

      }
     
    </div>
  )
}

export default Home
