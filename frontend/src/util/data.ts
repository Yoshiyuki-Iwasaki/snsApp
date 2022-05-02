import dayjs from 'dayjs';

export const formatDate = (dateText: string) => {
  return dayjs(dateText).format('YYYY/MM/DD HH:mm');
};
