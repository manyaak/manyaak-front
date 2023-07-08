import type { Meta, StoryObj } from '@storybook/react';

import { type RenderWeek } from './Week';
import { type RenderDay } from './Day';
import Month, { type RenderMonth } from './Month';

const renderMonth: RenderMonth = ({ year, month, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <p>
      {year}년 {month + 1}월
    </p>
    {children}
  </div>
);

const renderWeek: RenderWeek = ({
  year,
  month,
  week,
  isFirstWeek,
  isLastWeek,
  isInCurrentMonth,
  children,
}) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <p>
      {year}년 {month + 1}월 {week + 1}번째 주
    </p>
    <p>
      isFirstWeek: {isFirstWeek ? 'true' : 'false'}, isLastWeek:{' '}
      {isLastWeek ? 'true' : 'false'}, isInCurrentMonth:{' '}
      {isInCurrentMonth ? 'true' : 'false'}
    </p>
    <div style={{ display: 'flex', flexDirection: 'row' }}>{children}</div>
  </div>
);

const renderDay: RenderDay = ({ date, isInCurrentMonth }) => (
  <div
    style={{
      width: '100px',
      height: '100px',
      border: '1px solid #000000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: isInCurrentMonth ? '#000000' : '#b9b9b9',
    }}
  >
    <p>
      {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}
    </p>
  </div>
);

const meta: Meta<typeof Month> = {
  component: Month,
  args: {
    renderDay,
    renderWeek,
    renderMonth,
  },
};

export default meta;
type Story = StoryObj<typeof Month>;

export const General: Story = {
  args: {
    year: 2023,
    month: 6,
  },
};
