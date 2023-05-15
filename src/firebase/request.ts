import { addDoc, collection } from "firebase/firestore";

import { db } from "./firebase";

type props = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const submitContactForm = async ({ name, email, subject, message }: props) => {
  await addDoc(collection(db, "users"), {
    name: name,
    email: email,
    subject: subject,
    message: message,
  });
};

export { submitContactForm };
