import { handleUnfollowType } from '../../type';
import { handleFollowType } from '../../type';
import { RoomsType } from '@/type/Room';
import { UserType } from '@/api/User/type';

export type PresenterType = {
  chatRoom: {
    id: number;
    room: RoomsType;
    user: UserType;
  };
  postedUser: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  follow: {
    isRelationshipFollowing: {
      length: number;
    };
    isRelationshipFollowed: {
      length: number;
    };
    relationship: {
      length: number;
    };
  };
  checkedFollow: any;
  params: {
    id: string;
  };
  handleUnfollow: handleUnfollowType;
  handleFollow: handleFollowType;
};
