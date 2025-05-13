import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function saveQuote(data) {
  try {
    await addDoc(collection(db, "quotes"), {
      ...data,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error saving quote:", error);
    throw new Error("Failed to save quote");
  }
}
