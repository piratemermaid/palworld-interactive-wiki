import type { WorkSuitability } from '../types/workSuitability';

type Props = {
  name: WorkSuitability;
  size?: number;
  isHoverable?: boolean;
};

export default function WorkSuitabilityImage({
  name,
  size,
  isHoverable,
}: Props) {
  const sizeStyle = size ? { height: size, width: size } : {};

  const hoverStyle = isHoverable ? { cursor: 'pointer' } : {};

  return (
    <img
      src={`/images/workSuitability/${name.replaceAll(' ', '_')}_Icon.webp`}
      title={name}
      alt={name}
      style={{ ...sizeStyle, ...hoverStyle }}
    />
  );
}
