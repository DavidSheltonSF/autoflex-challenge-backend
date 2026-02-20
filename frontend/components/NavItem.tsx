interface Props {
  name: string;
}

export function NewNavItem({ name }: Props) {
  return <li className={`transition-[color] duration-300`}>{name}</li>;
}
