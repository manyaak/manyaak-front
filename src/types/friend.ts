export interface BaseUserInfo {
  id: number;
  name: string;
}

export interface FriendInfo extends BaseUserInfo {
  profileImg: string;
  statusMessage?: string;
}

export interface GroupInfo extends BaseUserInfo {
  profileImg: string[];
}
