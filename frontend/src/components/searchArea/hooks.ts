import { useNavigate } from 'react-router-dom';

// Chat作成処理をするcustom hooks.
export const useHandleSearch = (inputChange: any) => {
  const navigate = useNavigate();
  const handleSearch = (e: any) => {
    e.preventDefault();
    navigate('/search/' + inputChange.content);
  };

  return { handleSearch };
};
