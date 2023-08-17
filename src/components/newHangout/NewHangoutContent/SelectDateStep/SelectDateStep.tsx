interface SelectDateStepProps {
  setValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectDateStep = ({ setValid }: SelectDateStepProps) => (
  <>
    <div>날짜 선택 단계</div>
    <button type="button" onClick={() => setValid(true)}>
      일단 했다 생각해
    </button>
  </>
);

export default SelectDateStep;
