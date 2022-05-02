import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
const now = moment();
const nowFormat = now.format('YYYY-MM-DD');

export interface TodoState {
  // taskが何個あるのかを管理する
  idCount: number;
  // storeに保存するtaskの一覧
  todos: {
    id: number;
    username: string;
    date: string;
    content: string;
    likeState: boolean;
    likeCount: number;
  }[];
}

const initialState: TodoState = {
  idCount: 1,
  todos: [
    {
      id: 1,
      username: 'username1',
      date: '2022-03-27',
      content:
        '投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容',
      likeState: false,
      likeCount: 0,
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // 投稿追加機能
    // createTask: (state, action) => {
    //   state.idCount++;
    //   const newTask = {
    //     id: state.idCount,
    //     username: "username1",
    //     date: nowFormat,
    //     content: action.payload,
    //     likeState: false,
    //     likeCount: 0,
    //   };
    //   state.tasks = [newTask, ...state.tasks];
    // },
    // // 投稿削除機能
    // removeTask: (state, action) => {
    //   const result = window.confirm("本当にこの投稿を削除しますか。");
    //   if (result) {
    //     // 指定したtask以外でstate.tasksを新たに配列を作成する
    //     state.tasks = state.tasks.filter(t => t.id !== action.payload.id);
    //   }
    // },
    // // いいね機能
    // likeTask: (state, action) => {
    //   // state.tasksの中から編集したいtaskを抜き出す
    //   const task = state.tasks.find(t => t.id === action.payload.id);
    //   if (task) {
    //     // 抜き出したtaskのcompletedを反転させる
    //     task.likeState = !task.likeState;
    //     task.likeCount ? task.likeCount-- : task.likeCount++;
    //   }
    // },
  },
});

export const { actions: appActions } = todoSlice;

export default todoSlice.reducer;
