import {
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@mui/material';

import { TraitAutocomplete } from '@components/breedingCalculator';

type Props = {
  gender: Gender;
  traits: string[];
  onGenderChange: (gender: Gender) => void;
  onTraitsChange: (traits: string[]) => void;
};

export const InstanceFormFields = ({
  gender,
  traits,
  onGenderChange,
  onTraitsChange,
}: Props) => {
  return (
    <>
      <FormControl fullWidth>
        <RadioGroup
          row
          value={gender}
          onChange={(e) => onGenderChange(e.target.value as Gender)}
        >
          <FormControlLabel value="M" control={<Radio />} label="Male" />
          <FormControlLabel value="F" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>
      <TraitAutocomplete selectedTraits={traits} onChange={onTraitsChange} />
    </>
  );
};
