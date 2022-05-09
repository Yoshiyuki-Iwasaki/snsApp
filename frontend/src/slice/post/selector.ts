import { RootState } from '../../store';
import { PostState } from './index';

export const selectsPosts = (state: RootState): PostState['posts'] =>
  state.post.posts;
