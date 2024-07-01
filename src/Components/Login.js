import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleClickButton = () => {
  
      const message =  checkValidData(email.current.value, password.current.value);
       setErrorMessage(message);
         if(message) return;

         if(!isSignInForm){
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up userCredential
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + - + errorMessage);
            // ..
          });
         }else{
                
         }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_medium.jpg" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-black absolute w-4/12 p-12 my-32 mx-auto left-0 right-0 rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl text-white p-4">
          {isSignInForm ? "SignIn" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 font-bold"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 font-bold text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-800 font-bold text-white"
        />
        <p className="text-red-800 font-bold">{errorMessage}</p>
        <button
          type="submit"
          className="bg-red-500 p-2 my-6 w-full rounded-lg"
          onClick={handleClickButton}
        >
          {isSignInForm ? "SignIn" : "Sign Up"}
        </button>

        <p
          className="text-white py-6 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? SignUp now"
            : "Already registrer ? SignIn now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
