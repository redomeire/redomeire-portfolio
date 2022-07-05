import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

const submitContactForm = async (name, email, subject, message) => {
    await addDoc(collection(db, "users"), {
        name: name,
        email: email,
        subject: subject,
        message: message
    });
}

export { submitContactForm };