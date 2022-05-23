import React, { FC } from 'react';
import Presenter from './presenter';
import { notify } from '../../util/notify';
import useFetchMyUser from '../../hooks/useFetchMyUser';
import * as Yup from 'yup';
import PostApi from '../../api/Post/api';

const InputField: FC = () => {
  const { myUser } = useFetchMyUser();
  const initialValues = {
    content: '',
  };
  const validationSchema = Yup.object({
    content: Yup.string().required('Required'),
  });
  const onSubmit = (values) => {
    addPost(values);
  };
  const addPost = async (inputChange) => {
    if (!inputChange.content) return;
    const data: any = {
      content: inputChange.content,
      user_id: myUser.data.id,
    };
    try {
      await PostApi.create(data);
      notify('正常に投稿が完了しました。');
      console.log('test');
      window.location.reload();
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <Presenter
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      addPost={addPost}
    />
  );
};

export default InputField;
