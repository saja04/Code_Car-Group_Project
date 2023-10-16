
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {v4} from "uuid";


const firebaseConfig = {
  apiKey: "AIzaSyDuDNZe0WjKv6P_xk4g9oi-_aoji9htaA4",
  authDomain: "fir-codecar.firebaseapp.com",
  projectId: "fir-codecar",
  storageBucket: "fir-codecar.appspot.com",
  messagingSenderId: "669650396705",
  appId: "1:669650396705:web:7e2f3cf75ea51f36c4e560",
  measurementId: "G-8S92JK3NR8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);

export function uploadFile(file, setFormData) {
  const storageRef = ref(storage, v4());
  uploadBytes(storageRef, file)
    .then((snapshot) => {
      console.log(snapshot);

      getDownloadURL(storageRef)
        .then((url) => {
          setFormData((prevFormData) => ({
            ...prevFormData,
            imagen: url,
          }));
        })
        .catch((error) => {
          console.error("Error al obtener la URL de descarga:", error);
        });
    })
    .catch((error) => {
      console.error("Error al subir el archivo:", error);
    });
}
