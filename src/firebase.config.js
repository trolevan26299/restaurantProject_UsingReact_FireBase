import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyANmQoWCyRgnHf3L0hqTTEGpS1YcEaT5w0",
    authDomain: "restaurantapp-193bb.firebaseapp.com",
    databaseURL: "https://restaurantapp-193bb-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-193bb",
    storageBucket: "restaurantapp-193bb.appspot.com",
    messagingSenderId: "465535949879",
    appId: "1:465535949879:web:2472ef286f3df450e473b2",
    measurementId: "G-F2STHJEL1P"
};

const app=getApps.length > 0 ? getApp():initializeApp(firebaseConfig);
const firestore=getFirestore(app);
const storage=getStorage(app)

export{app,firestore,storage};