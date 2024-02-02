import { map } from 'lodash';

import PAL_WORK_SUITABILITY from './palWorkSuitability';

export const PAL_NAME_LIST = map(
  PAL_WORK_SUITABILITY,
  (_workSuitability, name) => name,
);
