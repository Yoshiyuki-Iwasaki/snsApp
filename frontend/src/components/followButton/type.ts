import { handleUnfollowType } from '../../type';
import { handleFollowType } from '../../type';
import { RoomsType } from '@/type/Room';
import { UserType } from '@/api/User/type';

export type PresenterType = {
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
  handleFollow?: handleFollowType;
  handleUnfollow?: handleUnfollowType;
};
