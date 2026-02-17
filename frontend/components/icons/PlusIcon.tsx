interface Props {
  color?: string;
  height?: string;
  width?: string;
}

export function PlusIcon(props: Props) {
  const { color = 'black', height = '24px', width = '24px' } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={color}
    >
      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
    </svg>
  );
}