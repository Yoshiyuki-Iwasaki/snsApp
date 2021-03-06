import React, { FC, useEffect } from 'react';
import Presenter from './presenter';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import useFetchMyUser from '../../hooks/useFetchMyUser';
import { notify } from '../../util/notify';
import UserApi from '../../api/User/api';
import { initialUserState } from '../../util/state';

const EditProfilePage: FC = () => {
  const { inputChange, setInputChange, handleInputChange } =
    useHandleInputChange(initialUserState);
  const { myUser } = useFetchMyUser();

  const handleEditProfile = async () => {
    const userRes = await UserApi.update(inputChange.id, inputChange);
    setInputChange(userRes.data);
    notify('正常に投稿の編集が完了しました。');
  };

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    if (files[0] != null) {
      setInputChange({ ...inputChange, [name]: files[0] });
    }
  };

  useEffect(() => {
    myUser && setInputChange(myUser.data);
  }, [myUser]);

  return (
    <Presenter
      editProfile={inputChange}
      handleInputChange={handleInputChange}
      handleEditProfile={handleEditProfile}
      onChangeImage={onChangeImage}
    />
  );
};

export default EditProfilePage;
