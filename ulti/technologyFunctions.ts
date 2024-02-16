import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, orderBy, query, serverTimestamp, updateDoc } from "firebase/firestore";
import { app } from "../app/_layout"
import { loadingStateEnum } from "../Types";

export async function deleteTechnology(id: string): Promise<loadingStateEnum> {
  try {
    const db = getFirestore(app);
    await deleteDoc(doc(db, "Technologies", id))
    return loadingStateEnum.success
  } catch {
    return loadingStateEnum.failed
  }
}

export async function addTechnology(item: technology): Promise<loadingStateEnum> {
  const db = getFirestore(app);
  try {
    await addDoc(collection(db, 'Technologies'), {
      content: item.content,
      name: item.name,
      displayTechnology: item.displayTechnology,
      firstUsed: serverTimestamp(),
      lastUsed: serverTimestamp(),
    })
    return loadingStateEnum.success;
  } catch {
    return loadingStateEnum.failed;
  }
}

export async function updateTechnology(item: technology): Promise<loadingStateEnum> {
  const db = getFirestore(app);
  try {
    await updateDoc(doc(db, 'Technologies', item.id), {
      contact: item.content,
      name: item.name,
      displayTechnology: item.displayTechnology,
      firstUsed: item.firstUsed,
      lastUsed: item.lastUsed,
    })
    return loadingStateEnum.success;
  } catch {
    return loadingStateEnum.failed;
  }
}

export async function listTechnologies() {
  const db = getFirestore();
  //TODO error handel paginate
  let resultData: technology[] = []
  const q = query(collection(db, "Technologies"), orderBy('lastUsed'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = doc.data()
    console.log(data)
    resultData.push({
      content: data.content,
      name: data.name,
      displayTechnology: data.displayTechnology,
      firstUsed: data.firstUsed.toDate().toISOString(),
      lastUsed: data.lastUsed.toDate().toISOString(),
      id: doc.id,
    })
  });
  console.log(resultData)
  return {result: loadingStateEnum.success, data: resultData};
}

export async function getTechnology(id: string): Promise<{
  result: loadingStateEnum.success,
  data: technology
} | {
  result: loadingStateEnum.failed
} | {
  result: loadingStateEnum.notFound
}> {
  try {
    const db = getFirestore()
    const result = await getDoc(doc(db, "Technologies", id));
    if (result.exists()) {
      const data = result.data()
      return {
        result: loadingStateEnum.success,
        data: {
          content: data.content,
          name: data.name,
          firstUsed: data.firstUsed.toDate().toISOString(),
          lastUsed: data.lastUsed.toDate().toISOString(),
          displayTechnology: data.displayTechnology,
          id: result.id
        }
      }
    }
    return { result: loadingStateEnum.notFound }
  } catch {
    return { result: loadingStateEnum.failed }
  }
}