import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const getItemById = async (id: string, collectionName: string) => {
  const docRef = doc(db, collectionName, id);

  const docSnap = await getDoc(docRef);
  const item = docSnap.data();

  return {
    isExists: docSnap.exists(),
    data: {
      ...docSnap?.data(),
      id: docSnap.id,
      createdAt:
        typeof item?.createdAt?.toMillis === "function"
          ? item?.createdAt.toMillis()
          : null,
    },
  };
};

export default getItemById;
