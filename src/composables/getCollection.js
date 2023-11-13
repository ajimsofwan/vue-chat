import { ref } from "vue";
import { firestore } from "../firebase/config";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  const collectionRef = firestore.collection(collection).orderBy("createdAt");

  collectionRef.onSnapshot(
    (snap) => {
      const results = [];

      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });

      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "Clould not fetch data.";
    }
  );
  return { documents, error };
};

export default getCollection;