import { getDoc } from "firebase/firestore";
import { colRef } from "src/firebase/firebase";

const getProjects = async () => {
  const docSnap = await getDoc(colRef);

  if (!docSnap.exists()) return null;

  return docSnap.data();
};

export { getProjects };
