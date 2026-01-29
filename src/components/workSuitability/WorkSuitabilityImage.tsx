import type { CSSProperties } from 'react';

type Props = {
  name: WorkSuitability;
  size?: number;
  customStyles?: CSSProperties;
};

export const WorkSuitabilityImage = ({ name, size, customStyles }: Props) => {
  const sizeStyle = size ? { height: size, width: size } : {};

  return (
    <img
      src={`/images/workSuitability/${name.replaceAll(' ', '_')}_Icon.webp`}
      title={name}
      alt={name}
      style={{ ...sizeStyle, ...customStyles }}
    />
  );
};
