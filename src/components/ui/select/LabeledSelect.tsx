import { FieldWrapper } from '../input/FieldWrapper';
import { BaseSelect, type BaseSelectProps } from './BaseSelect';

interface LabeledSelectProps extends BaseSelectProps {
  label: string;
  required?: boolean;
  error?: { message: string };
  wrapClassName?: string;
}

export function LabeledSelect({
  label,
  required,
  error,
  wrapClassName = '',
  id,
  ...rest // options, value, onChange, isDisabled 등
}: LabeledSelectProps) {
  const isError = Boolean(error && error.message);

  return (
    <FieldWrapper
      id={id}
      label={label}
      required={required}
      error={error}
      className={wrapClassName}
    >
      <BaseSelect id={id} isError={isError} {...rest} />
    </FieldWrapper>
  );
}
