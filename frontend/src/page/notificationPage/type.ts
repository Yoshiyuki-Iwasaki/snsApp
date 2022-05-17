import { UserType } from '@/api/User/type';
import { handleNotificationCheckType } from '../../type';

export type PresenterType = {
  notification: {
    checked: boolean;
    createdAt: string;
    id: number;
    post: null;
    type: string;
    url: number;
    visited: UserType;
    visiter: UserType;
  }[];
  handleNotificationCheck: handleNotificationCheckType;
};
