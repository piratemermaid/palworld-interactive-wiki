declare global {
  // TODO
  type Element = string;

  // TODO
  type PalName = string;

  type PalData = Record<
    PalName,
    {
      paldeckNo: string;
      elements: Element[];
      drops: string[];
    }
  >;
}

export {};
