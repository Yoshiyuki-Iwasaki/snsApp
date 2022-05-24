import React, { FC } from 'react';
import Presenter from './presenter';
import { useNavigate } from 'react-router-dom';
import { notify } from '../../util/notify';
import useFetchMyUser from '../../hooks/useFetchMyUser';
import UserApi from '../../api/User/api';
import Cookies from 'js-cookie';
import * as Yup from 'yup';

const SigninPage: FC = () => {
  const { fetchUser } = useFetchMyUser();
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('入力は必須です。'),
    password: Yup.string().required('入力は必須です。'),
  });
  const onSubmit = (values) => {
    handleLogin(values);
  };

  const handleLogin = async (inputChange) => {
    const data = {
      email: inputChange.email,
      password: inputChange.password,
    };
    try {
      const res = await UserApi.login(data);
      Cookies.set('_access_token', res.headers['access-token']);
      Cookies.set('_client', res.headers['client']);
      Cookies.set('_uid', res.headers['uid']);
      notify('正常にログインが完了しました。');
      fetchUser();
      navigate('/');
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Presenter
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default SigninPage;
