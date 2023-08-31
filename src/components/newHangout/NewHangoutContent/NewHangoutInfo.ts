export const NEW_HANGOUT_STEP_KEY = {
  selectFriend: 'selectFriend',
  selectDate: 'selectDate',
  selectLocation: 'selectLocation',
  check: 'check',
  complete: 'complete',
} as const;

export const NEW_HANGOUT_STEP_INFO = {
  1: NEW_HANGOUT_STEP_KEY.selectFriend,
  2: NEW_HANGOUT_STEP_KEY.selectDate,
  3: NEW_HANGOUT_STEP_KEY.selectLocation,
  4: NEW_HANGOUT_STEP_KEY.check,
  5: NEW_HANGOUT_STEP_KEY.complete,
} as const;

export const HEADER_TEXT = {
  [NEW_HANGOUT_STEP_KEY.selectFriend]: '함께할 친구를 선택해주세요',
  [NEW_HANGOUT_STEP_KEY.selectDate]: '시간을 선택해 주세요',
  [NEW_HANGOUT_STEP_KEY.selectLocation]: '약속 이름과 장소를 선택해주세요',
  [NEW_HANGOUT_STEP_KEY.check]: '약속 정보가 올바른지 확인해주세요',
  [NEW_HANGOUT_STEP_KEY.complete]: '',
} as const;
