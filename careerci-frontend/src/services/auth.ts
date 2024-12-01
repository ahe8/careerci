import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const auth = getAuth();

const registerUser = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

const loginUser = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

const logoutUser = async () => {
  return await signOut(auth);
};

const getAccessToken = async () => {
  return await auth.currentUser?.getIdToken();
}

export default { registerUser, loginUser, logoutUser, getAccessToken };
