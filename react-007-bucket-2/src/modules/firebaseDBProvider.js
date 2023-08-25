import { firebaseApp } from "../config/firebaseConfig";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { newBucketDto } from "./bucketDto";

const TBL_BUCKET = "bucket";
const db = getFirestore(firebaseApp);

export const getBucketList = async (search = "") => {
  try {
    const result = await getDocs(collection(db, TBL_BUCKET));

    const bucketList = result.docs.map((item) => {
      return { ...item.data() };
    });
    if (search) {
      search = search.toUpperCase();
      const searchList = bucketList.filter((item) => {
        return item.bucket.toUpperCase().indexOf(search) > -1;
      });
      return searchList;
    }
    // result.forEach((item) => {
    //   console.log(item.id, " => ", item.data().bucket);
    //   bucketList.push({ ...item.data().bucket, id: item.id });
    // });
    console.log("List : ", bucketList);
    return bucketList;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getBucket = async (bucketId) => {
  try {
    const result = await getDoc(doc(db, TBL_BUCKET, bucketId));
    return result.data();
  } catch (error) {
    console.error(error);
  }
};
// export const getBucket = async (bucketId) => {
//   try {
//     const result = await getDocs(collection(db, TBL_BUCKET));
//     const bucket = result.docs.filter((item) => {
//       return item.id === bucketId;
//     });
//     console.log("List : ", bucket[0].data());
//     return { ...bucket[0].data(), id: bucket[0].id };
//   } catch (error) {
//     console.log(error);
//     return "";
//   }
// };
export const newBucket = async () => {
  const newBucket = newBucketDto();
  console.log("NewBucket : ", newBucket);
  await saveBucket(newBucket);
  return await getBucket(newBucket.id);
};

export const saveBucket = async (bucket) => {
  try {
    await setDoc(doc(db, TBL_BUCKET, bucket.id), { ...bucket });
  } catch (error) {
    console.error(error);
  }
};

// 네임스페이스 방식
// export const saveBucket = async (bucket) => {
//   try {
//     const docRef = await addDoc(collection(db, TBL_BUCKET), { ...bucket });
//     console.log("Result : ", docRef);
//   } catch (error) {
//     console.error(error);
//   }
// };

export const deleteBucket = async (id) => {
  try {
    await deleteDoc(doc(db, TBL_BUCKET, id));
  } catch (error) {
    console.error(error);
  }
};
