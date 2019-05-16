import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromPosts from '../../tab1/store/posts.reducer';

export interface State {

  posts: fromPosts.State;
}

export const reducers: ActionReducerMap<State> = {

  posts: fromPosts.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
