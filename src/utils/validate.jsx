const checkValidData = (email, Password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(Password);
  if (!isEmailValid) return "email is not valid";
  if (!isPasswordValid) return "password not valid";

    return null
};

export default checkValidData;
