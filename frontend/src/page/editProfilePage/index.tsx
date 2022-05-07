import React, { FC, useEffect } from 'react';
import Presenter from './presenter';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import useFetchMyUser from '../../hooks/useFetchMyUser';
import { notify } from '../../util/notify';
import UserApi from '../../api/User/api';

const EditProfilePage: FC = () => {
  const initialUserState = {
    email: '',
    id: null,
    image: null,
    name: '',
    nickname: '',
    provider: '',
    uid: '',
  };
  const { inputChange, setInputChange, handleInputChange } =
    useHandleInputChange(initialUserState);
  const { myUser } = useFetchMyUser();

  const handleEditProfile = async () => {
    const userRes = await UserApi.update(inputChange.id, inputChange);
    setInputChange(userRes.data);
    notify('正常に投稿の編集が完了しました。');

    console.log('inputChange', inputChange);
  };

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    if (files != null) {
      console.log('files', files[0]);
      setInputChange({ ...inputChange, [name]: files[0] });
    }

    console.log('event.target.files', event.target.files);
  };

  useEffect(() => {
    myUser && setInputChange(myUser.data);
    console.log('inputChange', inputChange);
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
