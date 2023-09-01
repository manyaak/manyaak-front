export interface MemberType {
  id: number;
  name: string;
  profileImg?: string;
  email?: string;
  status?: string;
}
export interface HangoutInfoType {
  id: number;
  name: string;
  date: Date;
  location: string;
  latitude?: string;
  longitude?: string;
  /** 멤버 정보가 없을 경우 `약속`이 아닌 `일정` 정보를 담고 있다고 간주  */
  members?: MemberType[];
  groupName?: string;
  groupId?: number;
  /** 약속 정보를 담은 컴포넌트인 경우, 사용자가 현재 약속을 수락했는지에 대한 여부  */
  isAccepted?: boolean;
}

export interface SelectedPlaceInfoType {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}
