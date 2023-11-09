import { auth } from "../firebase/config";
import { ref } from "vue";
import { createUserWithEmailAndPassword, s } from "firebase/auth";

const error = ref(null);

const signUp = async (email, password, displayName) => {
  error.value = null;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Could not complete the sign up");
    }
    console.log(res.user);
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignUp = async () => {
  return { error, signUp };
};

export default useSignUp;
