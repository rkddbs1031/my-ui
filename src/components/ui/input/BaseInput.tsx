import { cn } from '@/utils';
import type { ChangeEvent, FocusEvent } from 'react';

type TextInputType = 'text' | 'password' | 'email' | 'tel';

export interface BaseInput {
  id: string;
  isDisabled?: boolean;
  className?: string;
  isError?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export interface GeneralInput extends BaseInput {
  type: TextInputType;
  value: string | number;
}

export interface NumberInput extends BaseInput {
  type: 'number';
  value: string | number;
  step?: number;
  min?: number;
  max?: number;
}

export type InputProps = GeneralInput | NumberInput;

export function Input({
  isDisabled = false,
  isError = false,
  className = '',
  ...rest
}: InputProps) {
  return (
    <input
      disabled={isDisabled ?? true}
      className={cn(
        'w-full px-3 py-2 border rounded-lg focus:outline-none',
        isError ? 'border-red-500' : 'border-gray-300',
        isDisabled && 'bg-gray-100 cursor-not-allowed',
        className
      )}
      {...rest}
    />
  );
}
