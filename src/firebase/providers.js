import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);

    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    // console.log("CREDENTIALS", credentials);

    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      // User info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    console.log("ERROR EN GOOGLE SIGNIN", error.errorMessage);

    return {
      ok: false,
      errorMessage: "Error en google",
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    const { uid, photoURL } = resp.user;

    await updateProfile(firebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: "Error en registro",
    };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    const { uid, photoURL, displayName } = resp.user;

    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: "Error al iniciar sesion con correo y contraseña",
    };
  }
};

export const logoutFirebase = async () => {
  return await firebaseAuth.signOut();
};
