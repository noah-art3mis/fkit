import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import {
    FB_CLIENT_EMAIL,
    FB_PRIVATE_KEY,
    FB_PROJECT_ID,
} from '$env/static/private';

var admin = require('firebase-admin');

try {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: FB_PROJECT_ID,
            clientEmail: FB_CLIENT_EMAIL,
            privateKey: FB_PRIVATE_KEY,
        }),
    });
} catch (err: any) {
    console.error('Firebase Admin Error:', err);
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();
