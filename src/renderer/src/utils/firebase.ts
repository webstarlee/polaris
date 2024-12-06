import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCh948S_a5wwdNeELHtOrfsJRvZsDlV2i0',
  authDomain: 'polaris-chat-9a26e.firebaseapp.com',
  projectId: 'polaris-chat-9a26e',
  storageBucket: 'polaris-chat-9a26e.firebasestorage.app',
  messagingSenderId: '605077196209',
  appId: '1:605077196209:web:7241cd7eb4f3f944090190',
  measurementId: 'G-S1KM9BQCBV'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
