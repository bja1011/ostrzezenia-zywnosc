import { Injectable } from '@angular/core';
import { POST_COLLECTION_NAME } from '../constatns/constants';
import firebase from '../firebase.instance';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  db: firebase.firestore.Firestore;

  constructor() {
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
