import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
const Header = () => {
  const user = useSelector((store) => store.user)
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const handleSignOut = () =>{
    signOut(auth).then(() => {

    }).catch((error) => {
        
    });
   }
   useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // User is signed in
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")

      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });
  },[]);
  return (
    <div className='absolute w-screen px-16 y-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        < img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo'
        className='w-40'
        />
       {
        user && (
          <div className='flex  align-center'>
          <img 
          className='w-12 h-12 m-4 '
          src={user?.photoURL}
          />
        <button   
        className='bg-red-500 rounded-lg p-2 m-4'
        onClick={handleSignOut}
        >
          Signout
       </button>
        </div>
        )
       }
    </div>
  )
}
export default Header