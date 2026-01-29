import { Card, Stack, Typography, Box, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

import { TraitChip } from '@components/breedingCalculator';
import { getGenderColor } from '@utils/breeding';

type Props = {
  instance: PalInstance;
  onEdit: (instance: PalInstance) => void;
  onDelete: (id: string) => void;
  showActions?: boolean;
};

export const PalInstanceCard = ({
  instance,
  onEdit,
  onDelete,
  showActions = true,
}: Props) => {
  return (
    <Card sx={{ p: 2 }}>
      <Stack spacing={1}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Stack direction="row" alignItems="center" gap={0.5}>
            <Typography variant="body2" color="text.secondary">
              Gender:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: getGenderColor(instance.gender),
                fontWeight: 'bold',
              }}
            >
              {instance.gender}
            </Typography>
          </Stack>
          {showActions && (
            <Stack direction="row">
              <IconButton
                size="small"
                onClick={() => onEdit(instance)}
                color="primary"
              >
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => onDelete(instance.id)}
                color="error"
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Stack>
          )}
        </Box>
        {instance.traits.length > 0 ? (
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.5 }}>
            {instance.traits.map((trait) => (
              <TraitChip key={trait} trait={trait} />
            ))}
          </Stack>
        ) : (
          <Typography variant="caption" color="text.secondary">
            No traits
          </Typography>
        )}
      </Stack>
    </Card>
  );
};
