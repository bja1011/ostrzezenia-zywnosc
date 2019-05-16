import { PostsActions, PostsActionTypes } from './posts.actions';

export interface State {

}

export const initialState: State = {};

export function reducer(state = initialState, action: PostsActions): State {
  switch (action.type) {

    case PostsActionTypes.LoadPosts:
      return state;

    default:
      return state;
  }
}
