import { toast } from 'react-toastify';

export const notify = (text: string) => {
  toast.configure();
  toast.success(text, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
  });
};
