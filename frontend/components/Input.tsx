import { ChangeEventHandler, FocusEventHandler } from 'react';

interface Props {
  height?: string;
  width?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  maxLength?: number;
  onChange?: ChangeEventHandler;
  onFocus?: FocusEventHandler;
}

export function Input(props: Props) {
  const { height, width, name, type, placeholder, defaultValue, maxLength, onChange, onFocus } =
    props;
  return (
    <input
      name={name}
      type={type}
      className="w-full border rounded-md py-[4px] px-[8px]"
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
      onFocus={onFocus}
      maxLength={maxLength}
      style={{
        height,
        width,
      }}
    />
  );
}
