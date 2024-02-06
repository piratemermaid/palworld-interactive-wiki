import { Grid, List, ListItem, Typography } from '@mui/material';

import { PASSIVE_SKILLS, PASSIVE_SKILL_TYPES } from '../data/passiveSkills';

export default function PassiveSkillsPage() {
  return (
    <>
      <Typography variant="h2" sx={{ my: 2 }}>
        Passive Skills
      </Typography>

      <Grid container spacing={2}>
        {PASSIVE_SKILL_TYPES.map((skillType) => {
          const matchingSkills = PASSIVE_SKILLS.filter((skill) =>
            skill.types.includes(skillType),
          );

          return (
            <Grid item key={skillType} lg={2} md={4} sm={6} xs={12}>
              <Typography variant="h6">{skillType}</Typography>

              <List>
                {matchingSkills.map((skill) => (
                  <ListItem key={skill.name}>
                    <Grid container direction="column">
                      <Grid item container>
                        <Typography
                          color="secondary"
                          variant="body1"
                          sx={{ mr: 1 }}
                        >
                          {skill.name}
                        </Typography>
                        <Typography variant="body2">
                          (Tier {skill.tier})
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">
                          {skill.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                ))}
              </List>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
