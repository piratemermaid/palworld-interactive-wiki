import { map } from 'lodash';
import { Grid, Typography } from '@mui/material';

import PAL_WORK_SKILLS from '../data/palWorkSkills';
import type { PalSkillList } from '../types/workSkills';

export default function PalWorkSkills() {
  return (
    <>
      <Typography variant="h2">Pal Work Skills</Typography>
      <Grid container spacing={2}>
        {map(PAL_WORK_SKILLS, (skills: PalSkillList[], palName: string) => {
          return (
            <Grid item key={palName} lg={2} md={3} sm={4} xs={12}>
              <Typography variant="h6">{palName}</Typography>
              {skills.map((skill) => {
                return (
                  // @ts-expect-error - bruh idk what TS is doing here
                  <Typography variant="body1" key={skill.name}>
                    {skill.name} {skill.level}{' '}
                    {skill.product ? `(${skill.product})` : null}
                  </Typography>
                );
              })}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
