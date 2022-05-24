import { RelationshipType } from '@/api/Relationship/type';
import { UserType } from '@/api/User/type';
import { followingList } from '@/type/Follow';

export type PresenterType = {
  postedUser: UserType;
  follow: {
    isRelationshipFollowed: RelationshipType[];
    isRelationshipFollowing: RelationshipType[];
    relationship: RelationshipType[];
  };
  params: {
    id: string;
  };
  followingList: followingList[];
  followerList: followingList[];
};
