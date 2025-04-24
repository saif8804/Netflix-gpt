import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
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
        dispatch(removeUser());
         navigate("/")
      }
    });
     return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-6 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
        className="w-44"
      />
      {user && (
        <div className="flex ">
          <img src={user?.photoURL} alt="img" className="w-10 h-10 " />
          <button onClick={handleSignout} className="cursor-pointer">
            (signout)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
