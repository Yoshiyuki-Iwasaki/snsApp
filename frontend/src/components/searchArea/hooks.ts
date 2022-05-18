import { useNavigate } from 'react-router-dom';

// Chat作成処理をするcustom hooks.
export const useHandleSearch = (inputChange) => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate('/search/' + inputChange.content);
  };

  return handleSearch;
};
