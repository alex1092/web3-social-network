import type { SocialMedia } from '@web3-social/contracts/typechain/contracts/SocialMedia'

export type {
  SocialMedia,
  SocialMediaInterface,
} from '@web3-social/contracts/typechain/contracts/SocialMedia'

export type Post = SocialMedia.PostStructOutput
export type User = SocialMedia.UserStructOutput

export type {
  PostCreatedEvent,
  PostLikedEvent,
  PostUnlikedEvent,
  ReplyCreatedEvent,
  UserRegisteredEvent,
  UserFollowedEvent,
  UserUnfollowedEvent,
} from '@web3-social/contracts/typechain/contracts/SocialMedia'