export interface ScheduleType {
  start: Date;
  end: Date;
}

export interface FriendType {
  id: number;
  name: string;
  img: string;
  statusMessage?: string | null;
}

export interface ScheduleInfoType {
  scheduleId: number;
  scheduleDate: string;
  time: string;
  info: string;
  detailAddress: string;
  lng: number;
  lat: number;
  friendList: FriendType[];
}
