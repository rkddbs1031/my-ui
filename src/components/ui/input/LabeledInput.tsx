import type { InputProps } from '@/types/input';

import { FieldWrapper } from './FieldWrapper';
import { Input } from './Input';

interface BaseLabeled {
  label: string;
  required?: boolean;
  wrapClassName?: string;
  error?: { message: string };
}

export type LabeledInputProps = InputProps & BaseLabeled;

export function LabeledInput({
  id,
  label,
  required,
  wrapClassName = '',
  error,
  ...rest // id, value, type, type, min, max, onChange 등
}: LabeledInputProps) {
  const isError = Boolean(error && error?.message);

  return (
    <FieldWrapper
      id={id}
      label={label}
      required={required}
      className={wrapClassName}
      error={error}
    >
      <Input id={id} isError={isError} {...rest} />
    </FieldWrapper>
  );
}
