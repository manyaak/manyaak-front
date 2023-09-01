import { useNavigate } from 'react-router-dom';
import TextButton from '@/components/common/TextButton';
import { ReactComponent as HangoutOutlineIcon } from '@/assets/icons/HangoutOutlineIcon.svg';
import { COLORS } from '@/constants/styles';
import * as styles from './EmptyContent.css';

interface EmptyContentProps {
  type: 'friend' | 'group';
}

const EmptyContent = ({ type }: EmptyContentProps) => {
  const navigate = useNavigate();

  const ContentData = {
    group: {
      suggestText: `아직 그룹이 없습니다. \n약속을 만들어 새로운 그룹을 만들어보세요!`,
      btnText: '약속 잡기',
      icon: <HangoutOutlineIcon />,
      onClick: () => navigate('/hangout/new'),
    },
    friend: {
      suggestText: `아직 친구가 없습니다. \n친구를 검색해서 추가해보세요!`,
      btnText: '친구 검색',
      icon: undefined,
      onClick: () => navigate('/friend/new'),
    },
  } as const;

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.suggestText}>{ContentData[type].suggestText}</div>
      <div className={styles.buttonWrapper}>
        <TextButton
          label={ContentData[type].btnText}
          iconSvg={ContentData[type].icon}
          onClick={ContentData[type].onClick}
          sizeType="small"
          backgroundColor={COLORS.primary.yellow}
          labelColor={COLORS.grayscale.gray800}
        />
      </div>
    </div>
  );
};

export default EmptyContent;
