import { CSSProperties } from 'react';

import type { WorkSuitability } from '../../types/workSuitability';

type Props = {
  name: WorkSuitability;
  size?: number;
  customStyles?: CSSProperties;
};

export default function WorkSuitabilityImage({
  name,
  size,
  customStyles,
}: Props) {
  const sizeStyle = size ? { height: size, width: size } : {};

  return (
    <img
      src={`/images/workSuitability/${name.replaceAll(' ', '_')}_Icon.webp`}
      title={name}
      alt={name}
      style={{ ...sizeStyle, ...customStyles }}
    />
  );
}
