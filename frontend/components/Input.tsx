import { ChangeEventHandler, FocusEventHandler, Ref } from 'react';

interface Props {
  ref?: Ref<HTMLInputElement>;
  height?: string;
  width?: string;
  name?: string;
  type?: string;
  step?: string;
  placeholder?: string;
  defaultValue?: string;
  maxLength?: number;
  minLength?: number;
  min?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}

export function Input(props: Props) {
  const {
    ref,
    height,
    width,
    name,
    type,
    step,
    placeholder,
    defaultValue,
    maxLength,
    minLength,
    min,
    onChange,
    onFocus,
  } = props;
  return (
    <input
      ref={ref}
      name={name}
      type={type}
      step={step}
      className="w-full border rounded-md py-[4px] px-[8px]"
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
      onFocus={onFocus}
      maxLength={maxLength}
      minLength={minLength}
      min={min}
      style={{
        height,
        width,
      }}
    />
  );
}
