import type { Meta, StoryObj } from '@storybook/react';
import { COLORS } from '@/constants/styles';
import TextButton from './TextButton';

import { ReactComponent as ScheduleIcon } from '@/assets/icons/schedule.svg';

export default {
  title: 'common/TextButton',
  component: TextButton,
} as Meta;

type Story = StoryObj<typeof TextButton>;

export const SmallButton: Story = {
  args: {
    label: 'Button',
  },
};

export const MediumButton: Story = {
  args: {
    label: 'MediumButton',
    sizeType: 'medium',
    labelColor: COLORS.grayscale.white,
    backgroundColor: COLORS.grayscale.gray800,
  },
};

export const LargeButton: Story = {
  args: {
    label: 'LargeButton',
    sizeType: 'large',
    backgroundColor: COLORS.primary.yellow,
  },
};

export const ButtonWithIcon: Story = {
  args: {
    label: 'ButtonWithIcon',
    iconSvg: <ScheduleIcon />,
  },
};

export const ButtonWithBorder: Story = {
  args: {
    label: 'ButtonWithBorder',
    borderColor: COLORS.grayscale.gray600,
    labelColor: COLORS.grayscale.gray600,
    backgroundColor: COLORS.grayscale.white,
  },
};
