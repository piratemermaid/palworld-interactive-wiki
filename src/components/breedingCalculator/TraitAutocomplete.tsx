import { useMemo } from 'react';
import {
  Autocomplete,
  Chip,
  TextField,
  Box,
  Typography,
  Stack,
} from '@mui/material';

import { PASSIVE_SKILLS } from '@data/passiveSkills';

type Props = {
  selectedTraits: string[];
  onChange: (traits: string[]) => void;
  label?: string;
};

export const TraitAutocomplete = ({
  selectedTraits,
  onChange,
  label = 'Traits',
}: Props) => {
  const TRAIT_OPTIONS = useMemo(
    () =>
      PASSIVE_SKILLS.filter((skill) => skill.name.trim() !== '')
        .map((skill) => skill.name)
        .sort(),
    [],
  );

  return (
    <Autocomplete
      multiple
      options={TRAIT_OPTIONS}
      value={selectedTraits}
      onChange={(_, newValue) => onChange(newValue)}
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder="Select traits" />
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            {...getTagProps({ index })}
            key={option}
            label={option}
            size="small"
          />
        ))
      }
      renderOption={(props, option) => {
        const skill = PASSIVE_SKILLS.find((s) => s.name === option);
        return (
          <Box component="li" {...props} key={option}>
            <Stack sx={{ flexGrow: 1 }}>
              <Typography variant="body2" color="primary">
                {option}
              </Typography>
              {skill && (
                <Typography variant="caption" color="text.secondary">
                  {skill.description}
                </Typography>
              )}
            </Stack>
          </Box>
        );
      }}
      filterSelectedOptions
      sx={{ width: '100%' }}
    />
  );
};
