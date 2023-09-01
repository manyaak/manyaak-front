// TODO 멤버 타입 정의
export interface HangoutInfoType {
  id: number;
  name: string;
  date: Date;
  location: string;
  /** 멤버 정보가 없을 경우 `약속`이 아닌 `일정` 정보를 담고 있다고 간주  */
  members?: any[];
  /** 약속 정보를 담은 컴포넌트인 경우, 사용자가 현재 약속을 수락했는지에 대한 여부  */
  isAccepted?: boolean;
}
