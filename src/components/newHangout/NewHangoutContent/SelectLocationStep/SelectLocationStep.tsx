interface SelectLocationStepProps {
  setValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectLocationStep = ({ setValid }: SelectLocationStepProps) => (
  <>
    <div>장소 선택 단계</div>
    <button type="button" onClick={() => setValid(true)}>
      일단 했다 생각해
    </button>
  </>
);

export default SelectLocationStep;
