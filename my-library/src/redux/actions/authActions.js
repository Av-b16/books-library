import { auth } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { updateProfile } from "firebase/auth";

export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_USER = "SET_USER";

export const registerUser = (name, email, password) => async (dispatch) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Now update the user's profile with the name
      await updateProfile(userCredential.user, {
        displayName: name,
      });
  
      dispatch({ type: REGISTER_USER, payload: userCredential.user });
    } catch (error) {
      console.error("Registration Error:", error.message);
    }
  };

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    dispatch({ type: LOGIN_USER, payload: userCredential.user });
  } catch (error) {
    console.error("Login Error:", error.message);
  }
};

export const logoutUser = () => async (dispatch) => {
  await signOut(auth);
  dispatch({ type: LOGOUT_USER });
};
