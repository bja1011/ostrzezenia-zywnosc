import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import FIREBASE_CONFIG from '../../../../firebase.config';
import { POST_COLLECTION_NAME } from '../constatns/constants';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  db: firebase.firestore.Firestore;

  constructor() {
    firebase.initializeApp(FIREBASE_CONFIG);

    this.db = firebase.firestore();
  }

  async getPosts() {
    const postsCollection = this.db.collection(POST_COLLECTION_NAME);
    const querySnapshot = await postsCollection.get();

    const posts = [];
    querySnapshot.forEach(doc => {
      posts.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return posts;
  }
}
