import { useMemo } from 'react';
import { Chip, Stack, Typography, Box } from '@mui/material';

import { PASSIVE_SKILLS } from '@data/passiveSkills';

type TraitCategory = {
  label: string;
  type: PassiveSkillType | null; // null means it's a specific skill name
  skillName?: string;
};

const TRAIT_CATEGORIES: TraitCategory[] = [
  { label: 'Work Speed', type: 'Work Speed' },
  { label: 'Sanity', type: 'Sanity' },
  { label: 'Nocturnal', type: null, skillName: 'Nocturnal' },
  { label: 'Hunger', type: 'Hunger' },
  { label: 'Movement Speed', type: 'Movement Speed' },
  { label: 'Stamina', type: 'Stamina' },
];

type Props = {
  selectedTraits: string[];
  onAddTraits: (traits: string[]) => void;
};

export const TraitCategorySelector = ({
  selectedTraits,
  onAddTraits,
}: Props) => {
  // Get all trait names for each category
  const categoryTraits = useMemo(() => {
    const categoryMap = new Map<string, string[]>();

    TRAIT_CATEGORIES.forEach((category) => {
      if (category.skillName) {
        // Special case for specific skill names
        categoryMap.set(category.label, [category.skillName]);
      } else if (category.type) {
        // Get all skills that have this type
        const traits = PASSIVE_SKILLS.filter((skill) =>
          skill.types.includes(category.type as PassiveSkillType),
        )
          .map((skill) => skill.name)
          .filter((name) => name.trim() !== '');
        categoryMap.set(category.label, traits);
      }
    });

    return categoryMap;
  }, []);

  const handleCategoryClick = (categoryLabel: string) => {
    const traits = categoryTraits.get(categoryLabel) || [];
    // Merge with existing traits, avoiding duplicates
    const newTraits = Array.from(
      new Set([...selectedTraits, ...traits]),
    ).sort();
    onAddTraits(newTraits);
  };

  // Check if a category is fully selected (all its traits are in selectedTraits)
  const isCategorySelected = (categoryLabel: string): boolean => {
    const traits = categoryTraits.get(categoryLabel) || [];
    return (
      traits.length > 0 &&
      traits.every((trait) => selectedTraits.includes(trait))
    );
  };

  // Check if a category is partially selected
  const isCategoryPartial = (categoryLabel: string): boolean => {
    const traits = categoryTraits.get(categoryLabel) || [];
    const selectedCount = traits.filter((trait) =>
      selectedTraits.includes(trait),
    ).length;
    return selectedCount > 0 && selectedCount < traits.length;
  };

  return (
    <Box>
      <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
        Quick add trait categories:
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {TRAIT_CATEGORIES.map((category) => {
          const isSelected = isCategorySelected(category.label);
          const isPartial = isCategoryPartial(category.label);
          const traitCount = categoryTraits.get(category.label)?.length || 0;

          return (
            <Chip
              key={category.label}
              label={`${category.label}${traitCount > 1 ? ` (${traitCount})` : ''}`}
              onClick={() => handleCategoryClick(category.label)}
              color={isSelected ? 'primary' : isPartial ? 'default' : 'default'}
              variant={
                isSelected ? 'filled' : isPartial ? 'outlined' : 'outlined'
              }
              sx={{
                cursor: 'pointer',
                ...(isPartial && {
                  borderStyle: 'dashed',
                }),
              }}
            />
          );
        })}
      </Stack>
    </Box>
  );
};
