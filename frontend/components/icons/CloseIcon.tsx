interface Props {
  color?: string;
  height?: string;
  width?: string;
}

export function CloseIcon(props: Props) {
  const { color = 'black', height = '24px', width = '24px' } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={color}
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  );
}
