import CheckBox from '@/components/common/CheckBox';
import { getDateTimeLocalString } from '@/utils/date';

import * as styles from './SelectDateStep.css';
import { ScheduleType } from '@/types/schedule';

interface DateSelectBoxProps {
  infoVer: boolean;
  setInfoVer: React.Dispatch<React.SetStateAction<boolean>>;
  selectedSchedule: ScheduleType | null;
  setSelectedSchedule: React.Dispatch<
    React.SetStateAction<ScheduleType | null>
  >;
}

const DateSelectBox = ({
  infoVer,
  setInfoVer,
  selectedSchedule,
  setSelectedSchedule,
}: DateSelectBoxProps) => {
  const onClickCheckbox = () => setInfoVer((prev) => !prev);
  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSelectedSchedule(
      (prev) => ({ ...prev, [name]: new Date(value) } as ScheduleType),
    );
  };

  return (
    <div className={styles.selectBoxWrapper}>
      <div className={styles.checkboxWrap}>
        <CheckBox checked={infoVer} onClick={onClickCheckbox} />
        <div className={styles.checkboxLabel}>멤버 일정 보기</div>
      </div>
      <div className={styles.dateInputsWrap}>
        <div>
          <div className={styles.dateLabel}>시작</div>
          <input
            type="datetime-local"
            name="start"
            value={
              selectedSchedule && selectedSchedule.start
                ? getDateTimeLocalString(selectedSchedule.start)
                : ''
            }
            onChange={onChangeDate}
            className={styles.dateInput}
          />
        </div>
        <div>
          <div className={styles.dateLabel}>종료</div>
          <input
            type="datetime-local"
            name="end"
            value={
              selectedSchedule && selectedSchedule.end
                ? getDateTimeLocalString(selectedSchedule.end)
                : ''
            }
            onChange={onChangeDate}
            className={styles.dateInput}
          />
        </div>
      </div>
    </div>
  );
};

export default DateSelectBox;
