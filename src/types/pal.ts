// TODO
type Element = string;

// TODO
export type PalName = string;

export type PalData = Record<
  PalName,
  {
    paldeckNo: string;
    elements: Element[];
    drops: string[];
  }
>;
