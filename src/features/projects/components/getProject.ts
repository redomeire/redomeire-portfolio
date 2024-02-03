import { getDoc } from "firebase/firestore";

import { colRef } from "@/firebase/firebase";

const getProjects = async () => {
  const docSnap = await getDoc(colRef);

  if (!docSnap.exists()) return null;

  return docSnap.data();
};

export { getProjects };
