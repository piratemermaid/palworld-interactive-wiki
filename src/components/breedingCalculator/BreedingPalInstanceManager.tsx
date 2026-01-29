import React from 'react';
import {
  Card,
  Grid,
  Stack,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import {
  Add as AddIcon,
  ExpandMore as ExpandMoreIcon,
  Clear as ClearIcon,
} from '@mui/icons-material';

import {
  BreedingWarning,
  PalInstanceCard,
  InstanceFormFields,
} from '@components/breedingCalculator';
import { useStore } from '@store';
import { getInstancesForPal } from '@utils/breeding';
import { BREEDING_DATA } from '@data/breeding';

type Props = {
  targetPal?: PalName | null;
};

export const BreedingPalInstanceManager = ({ targetPal }: Props) => {
  const userPals = useStore((store) => store.userPals);
  const palInstances = useStore((store) => store.palInstances);
  const addPalInstance = useStore((store) => store.addPalInstance);
  const removePalInstance = useStore((store) => store.removePalInstance);
  const updatePalInstance = useStore((store) => store.updatePalInstance);

  const [editingInstance, setEditingInstance] =
    React.useState<PalInstance | null>(null);
  const [addingForPal, setAddingForPal] = React.useState<string | null>(null);
  const [formPalName, setFormPalName] = React.useState<string>('');
  const [formGender, setFormGender] = React.useState<Gender>('M');
  const [formTraits, setFormTraits] = React.useState<string[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const resetForm = React.useCallback(() => {
    setFormPalName('');
    setFormGender('M');
    setFormTraits([]);
  }, []);

  const handleAdd = (palName: string) => {
    addPalInstance({
      palName,
      gender: formGender,
      traits: formTraits,
    });
    setAddingForPal(null);
    resetForm();
  };

  const handleEdit = (instance: PalInstance) => {
    setEditingInstance(instance);
    setFormPalName(instance.palName);
    setFormGender(instance.gender);
    setFormTraits([...instance.traits]);
  };

  const handleSaveEdit = () => {
    if (!editingInstance) return;
    updatePalInstance(editingInstance.id, {
      palName: formPalName,
      gender: formGender,
      traits: formTraits,
    });
    setEditingInstance(null);
    resetForm();
  };

  const handleCancel = () => {
    setEditingInstance(null);
    setAddingForPal(null);
    resetForm();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this instance?')) {
      removePalInstance(id);
    }
  };

  // Filter caught pals to only show those needed for breeding the target pal
  const relevantPals = React.useMemo(() => {
    if (!targetPal || !BREEDING_DATA[targetPal]) {
      return userPals; // Show all caught pals if no target selected
    }

    const combinations = BREEDING_DATA[targetPal];
    const parentPalNames = new Set<string>();

    combinations.forEach((combo) => {
      parentPalNames.add(combo.parent1);
      parentPalNames.add(combo.parent2);
    });

    // Return only caught pals that are parents for the target pal
    return userPals.filter((palName) => parentPalNames.has(palName));
  }, [userPals, targetPal]);

  // Filter relevant pals by search query
  const filteredPals = React.useMemo(() => {
    if (!searchQuery.trim()) {
      return relevantPals;
    }
    const query = searchQuery.toLowerCase().trim();
    return relevantPals.filter((palName) =>
      palName.toLowerCase().includes(query),
    );
  }, [relevantPals, searchQuery]);

  if (userPals.length === 0) {
    return (
      <BreedingWarning message="No caught pals yet. Go to 'My Pals' page to mark pals as caught." />
    );
  }

  if (targetPal && relevantPals.length === 0) {
    return (
      <Stack spacing={2}>
        <div>
          <Typography variant="h6">Manage Instances of Caught Pals</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {targetPal
              ? `Showing caught pals needed to breed ${targetPal}. Add instances with gender and traits.`
              : 'Add instances for your caught pals with gender and traits. These will be used to calculate viable breeding combinations.'}
          </Typography>
        </div>
        <TextField
          label="Search by pal name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Type to filter pals..."
          sx={{ maxWidth: 400 }}
          size="small"
          InputProps={{
            endAdornment: searchQuery && (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={() => setSearchQuery('')}
                  edge="end"
                  aria-label="clear search"
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <BreedingWarning
          message={`None of your caught pals are needed to breed ${targetPal}. Add more pals or select a different target pal.`}
        />
      </Stack>
    );
  }

  return (
    <Stack spacing={2}>
      <div>
        <Typography variant="h6">Manage Instances of Caught Pals</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {targetPal
            ? `Showing caught pals needed to breed ${targetPal}. Add instances with gender and traits.`
            : 'Add instances for your caught pals with gender and traits. These will be used to calculate viable breeding combinations.'}
        </Typography>
      </div>

      <TextField
        label="Search by pal name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Type to filter pals..."
        sx={{ maxWidth: 400 }}
        size="small"
        InputProps={{
          endAdornment: searchQuery && (
            <InputAdornment position="end">
              <IconButton
                size="small"
                onClick={() => setSearchQuery('')}
                edge="end"
                aria-label="clear search"
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {searchQuery.trim() && filteredPals.length === 0 ? (
        <BreedingWarning
          message={`No pals found matching "${searchQuery}". Try a different search term.`}
        />
      ) : (
        <Stack spacing={2}>
          {filteredPals.map((palName) => {
            const instances = getInstancesForPal(palName, palInstances);
            const isAdding = addingForPal === palName;

            return (
              <Accordion key={palName} defaultExpanded={instances.length === 0}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box
                    sx={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      pr: 2,
                    }}
                  >
                    <Typography variant="h6">{palName}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {instances.length} instance
                      {instances.length !== 1 ? 's' : ''}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack spacing={2}>
                    {instances.length > 0 && (
                      <Grid container spacing={2}>
                        {instances.map((instance) => (
                          <Grid item xs={12} sm={6} md={4} key={instance.id}>
                            <PalInstanceCard
                              instance={instance}
                              onEdit={handleEdit}
                              onDelete={handleDelete}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    )}

                    {!isAdding ? (
                      <Button
                        variant="outlined"
                        startIcon={<AddIcon />}
                        onClick={() => setAddingForPal(palName)}
                        size="small"
                      >
                        Add Instance for {palName}
                      </Button>
                    ) : (
                      <Card variant="outlined" sx={{ p: 2 }}>
                        <Stack spacing={2}>
                          <InstanceFormFields
                            gender={formGender}
                            traits={formTraits}
                            onGenderChange={setFormGender}
                            onTraitsChange={setFormTraits}
                          />
                          <Stack
                            direction="row"
                            sx={{ gap: 1, justifyContent: 'flex-end' }}
                          >
                            <Button onClick={handleCancel}>Cancel</Button>
                            <Button
                              onClick={() => handleAdd(palName)}
                              variant="contained"
                            >
                              Add
                            </Button>
                          </Stack>
                        </Stack>
                      </Card>
                    )}
                  </Stack>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Stack>
      )}

      {/* Edit Dialog */}
      <Dialog
        open={editingInstance !== null}
        onClose={handleCancel}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Edit Instance</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <FormControl fullWidth>
              <InputLabel>Pal Name</InputLabel>
              <Select
                value={formPalName}
                onChange={(e) => setFormPalName(e.target.value)}
                label="Pal Name"
                disabled
              >
                <MenuItem value={formPalName}>{formPalName}</MenuItem>
              </Select>
            </FormControl>
            <InstanceFormFields
              gender={formGender}
              traits={formTraits}
              onGenderChange={setFormGender}
              onTraitsChange={setFormTraits}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button
            onClick={handleSaveEdit}
            variant="contained"
            disabled={!formPalName}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};
