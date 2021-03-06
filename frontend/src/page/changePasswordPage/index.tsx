import React, { FC } from 'react';
import Presenter from './presenter';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import { notify } from '../../util/notify';
import UserApi from '../../api/User/api';

const ChangePasswordPage: FC = () => {
  const { inputChange, handleInputChange } = useHandleInputChange('');

  const handleEditProfile = async () => {
    try {
      await UserApi.change_password_mail(inputChange.email, '/password');
      notify('正常にパスワードが変更されました');
    } catch (e) {
      console.log('e', e);
    }
  };

  return (
    <Presenter
      editProfile={inputChange}
      handleInputChange={handleInputChange}
      handleEditProfile={handleEditProfile}
    />
  );
};

export default ChangePasswordPage;
