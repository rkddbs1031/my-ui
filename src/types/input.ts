import type { ChangeEvent, FocusEvent } from 'react';

export type TextInputType = 'text' | 'password' | 'email' | 'tel';

export type NumberType = 'number';

export type InputType = TextInputType | NumberType;

export interface BaseInput {
  id: string;
  isDisabled?: boolean;
  className?: string;
  isError?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
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
  hideSpinner?: boolean;
}

export interface PasswordInput extends BaseInput {
  type: 'password';
  value: string;
  showToggle?: boolean;
}

export type InputProps = GeneralInput | NumberInput | PasswordInput;
