import { Injectable } from '@angular/core';
import { POST_COLLECTION_NAME } from '../constatns/constants';
import firebase from '../firebase.instance';
import { Post } from '../../../core/interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  db: firebase.firestore.Firestore;

  constructor() {
    this.db = firebase.firestore();
  }

  /**
   * Get posts from firebase database and create array of posts.
   */
  async getPosts() {
    const postsCollection = this.db.collection(POST_COLLECTION_NAME);
    const querySnapshot = await postsCollection.get();
    const posts: Post[] = [];
    querySnapshot.forEach(doc => {
      posts.push({
        id: doc.id,
        ...doc.data()
      } as Post);
    });
    return posts;
  }
}
