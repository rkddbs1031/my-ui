import { FieldWrapper } from './FieldWrapper';
import { Input, type GeneralInput, type NumberInput } from './BaseInput';

interface BaseLabeld {
  label: string;
  required?: boolean;
  wrapClassName?: string;
  error?: { message: string };
}

type LabeledInputProps =
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
