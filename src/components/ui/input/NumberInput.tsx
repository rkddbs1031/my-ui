import type { NumberInput } from '@/types/input';
import { cn } from '@/utils';
import { BaseInput } from './BaseInput';

export default function NumberInput({
  type,
  onChange,
  min,
  max,
  step,
  hideSpinner,
  ...props
}: NumberInput) {
  return (
    <BaseInput
      {...props}
      type="number"
      min={min}
      max={max}
      step={step}
      onChange={onChange}
      className={cn(
        hideSpinner &&
          '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
        props.className
      )}
    />
  );
}
