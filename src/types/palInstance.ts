import type { PalName } from './pal';

export type Gender = 'M' | 'F';

export type PalInstance = {
  id: string; // unique identifier
  palName: PalName;
  gender: Gender;
  traits: string[]; // passive skill names
};

export type ViablePair = {
  instance1: PalInstance;
  instance2: PalInstance;
};
