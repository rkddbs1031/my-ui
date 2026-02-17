import type { GeneralInput, NumberInput } from '@/types/input';

import { FieldWrapper } from './FieldWrapper';
import { Input } from './Input';

interface BaseLabeld {
  label: string;
  required?: boolean;
  wrapClassName?: string;
  error?: { message: string };
}

export type LabeledInputProps =
  | (Omit<GeneralInput, 'isError'> & BaseLabeld)
  | (Omit<NumberInput, 'isError'> & BaseLabeld);

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
