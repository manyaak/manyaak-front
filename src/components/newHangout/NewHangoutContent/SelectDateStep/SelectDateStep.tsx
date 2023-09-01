import { useCallback, useEffect, useState } from 'react';
import { getHourAndMinute, isSameDate } from '@/utils/date';
import useMontlyCalendar from '@/hooks/useMontlyCalendar';
import { CalenderHeader, MontlyCalendar } from '@/components/common/Calendar';
import FooterButton from '@/components/common/FooterButton';
import DateSelectBox from './DateSelectBox';
import { ScheduleType } from '@/types/schedule';
import { HangoutDataType, NEW_HANGOUT_STEP_KEY } from '../NewHangoutInfo';
import * as styles from './SelectDateStep.css';

const DummySchedules = [
  { start: new Date('2023-08-26T15:30'), end: new Date('2023-08-26T19:00') },
  { start: new Date('2023-08-27T15:30'), end: new Date('2023-08-27T19:00') },
  { start: new Date('2023-08-27T20:30'), end: new Date('2023-08-27T24:00') },
  { start: new Date('2023-09-01T12:30'), end: new Date('2023-09-27T24:00') },
];

interface SelectDateStepProps {
  onNextStep: (
    data?: HangoutDataType[typeof NEW_HANGOUT_STEP_KEY.selectDate],
  ) => void;
}

const SelectDateStep = ({ onNextStep }: SelectDateStepProps) => {
  const { year, month, setBeforeMonth, setNextMonth } = useMontlyCalendar();

  // 멤버 일정 보기 유무
  const [infoVer, setInfoVer] = useState<boolean>(false);
  // 선택된 날짜 내 가능한 스케줄 리스트
  const [filteredSchedules, setFilteredSchedules] = useState<ScheduleType[]>(
    [],
  );
  // 현재 선택된 스케줄
  const [selectedSchedule, setSelectedSchedule] = useState<ScheduleType | null>(
    null,
  );
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (selectedSchedule?.start && selectedSchedule?.end) {
      setIsValid(true);
    }
  }, [selectedSchedule, setIsValid]);

  const onSelectDay = useCallback((day: Date) => {
    setFilteredSchedules(
      DummySchedules.filter((schedule) => isSameDate(schedule.start, day)),
    );
  }, []);

  const onSelectSchedule = (schedule: ScheduleType) => {
    setSelectedSchedule(schedule);
    setIsValid(true);
  };

  const onClickNextBtn = () => {
    if (isValid) {
      const data = selectedSchedule as ScheduleType;

      onNextStep(data);
    }
  };

  return (
    <>
      <CalenderHeader
        year={year}
        month={month}
        goBefore={setBeforeMonth}
        goNext={setNextMonth}
        className={styles.calendarHeader}
      />
      <MontlyCalendar year={year} month={month} onSelectDay={onSelectDay} />
      <div className={styles.scheduleListWrapper}>
        {infoVer ? (
          <>멤버 일정</>
        ) : (
          filteredSchedules.map((schedule) => (
            <div
              key={schedule.start.toString()}
              className={`${styles.scheduleBox} ${
                schedule === selectedSchedule && styles.selectedSchedule
              }`}
              onClick={() => onSelectSchedule(schedule)}
            >
              {`${getHourAndMinute(schedule.start)} - ${getHourAndMinute(
                schedule.end,
              )}`}
            </div>
          ))
        )}
      </div>
      <DateSelectBox
        infoVer={infoVer}
        setInfoVer={setInfoVer}
        selectedSchedule={selectedSchedule}
        setSelectedSchedule={setSelectedSchedule}
      />
      <FooterButton onClick={onClickNextBtn} disabled={!isValid} label="다음" />
    </>
  );
};

export default SelectDateStep;
