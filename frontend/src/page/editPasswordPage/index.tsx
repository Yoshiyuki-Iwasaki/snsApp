import React, { FC } from 'react';
import Presenter from './presenter';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import { notify } from '../../util/notify';
import UserApi from '../../api/User/api';

const EditProfilePage: FC = () => {
  const initialUserState = {
    password: '',
    password_confirmation: '',
  };
  const { inputChange, setInputChange, handleInputChange } =
    useHandleInputChange(initialUserState);

  const handleEditProfile = async () => {
    if (!inputChange.password || !inputChange.password_confirmation) return;
    const userRes = await UserApi.change_password(inputChange);
    setInputChange(userRes.data);
    notify('正常にパスワードの編集が完了しました。');
  };

  return (
    <Presenter
      editProfile={inputChange}
      handleInputChange={handleInputChange}
      handleEditProfile={handleEditProfile}
    />
  );
};

export default EditProfilePage;
