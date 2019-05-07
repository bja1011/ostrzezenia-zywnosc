import * as firebase from 'firebase';
import FIREBASE_CONFIG from '../../../firebase.config';

export default !firebase.apps.length ? firebase.initializeApp(FIREBASE_CONFIG) : firebase.app();
