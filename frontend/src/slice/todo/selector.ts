import { RootState } from '../../store';
import { TodoState } from './index';

export const selectsTodos = (state: RootState): TodoState['todos'] =>
  state.todo.todos;
