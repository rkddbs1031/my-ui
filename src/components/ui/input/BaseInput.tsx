import type { InputHTMLAttributes } from 'react';

import type { InputProps, NumberInput, PasswordInput } from '@/types/input';
import { cn } from '@/utils';

export function BaseInput({
  isDisabled = false,
  isError = false,
  className = '',
  ...rest
}: InputProps) {
  const { showToggle, hideSpinner, ...pureProps } = rest as Partial<
    Pick<PasswordInput, 'showToggle'> & Pick<NumberInput, 'hideSpinner'>
  > &
    InputHTMLAttributes<HTMLInputElement>;
  /* Partial : 혹시 있다면 꺼내겠다 선언. */

  return (
    <input
      {...pureProps}
      disabled={isDisabled ?? true}
      className={cn(
        'w-full px-3 py-2 border rounded-lg focus:outline-none',
        isError ? 'border-red-500' : 'border-gray-300',
        isDisabled && 'bg-gray-100 cursor-not-allowed opacity-60',
        className
      )}
    />
  );
}
