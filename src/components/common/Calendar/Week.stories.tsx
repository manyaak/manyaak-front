import type { Meta, StoryObj } from '@storybook/react';

import Week, { type RenderWeek } from './Week';
import { type RenderDay } from './Day';

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

const meta: Meta<typeof Week> = {
  component: Week,
  args: {
    renderDay,
    renderWeek,
  },
};

export default meta;
type Story = StoryObj<typeof Week>;

export const General: Story = {
  args: {
    year: 2023,
    month: 6,
    week: 1,
  },
};

export const FirstWeek: Story = {
  args: {
    year: 2023,
    month: 9,
    week: 0,
  },
};

export const LastWeek: Story = {
  args: {
    year: 2023,
    month: 8,
    week: 4,
  },
};

export const FirstAndLastWeek: Story = {
  args: {
    year: 2023,
    month: 6,
    week: 0,
  },
};

export const NotInCurrentMonth: Story = {
  args: {
    year: 2023,
    month: 7,
    week: 5,
  },
};
