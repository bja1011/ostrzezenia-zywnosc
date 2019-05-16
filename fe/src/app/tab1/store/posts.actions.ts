import { Action } from '@ngrx/store';

export enum PostsActionTypes {
  LoadPosts = '[Posts] Load Posts',


}

export class LoadPosts implements Action {
  readonly type = PostsActionTypes.LoadPosts;
}


export type PostsActions = LoadPosts;
