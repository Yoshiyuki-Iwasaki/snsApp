// import { notify } from '../../util/notify';
// import useFetchMyUser from '../../hooks/useFetchMyUser';
// import useFetchAllPosts from '../../hooks/useFetchAllPosts';
// import PostApi from '../../api/Post/api';

// // Post作成処理をするcustom hooks.
// export const useAddPost = (inputChange: any) => {
//   const { myUser } = useFetchMyUser();
//   const addPost = async () => {
//     console.log('inputChange', inputChange);
//     if (!inputChange.content) return;
//     const data: any = {
//       content: inputChange.content,
//       user_id: myUser.data.id,
//     };
//     try {
//       await PostApi.create(data);
//       notify('正常に投稿が完了しました。');
//       console.log('test');
//       window.location.reload();
//     } catch (e: any) {
//       console.log(e);
//     }
//   };

//   return addPost;
// };
