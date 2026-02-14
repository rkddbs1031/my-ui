import type { TextInputType } from './input';

export type InputType = TextInputType | 'number';

export interface SelectOption {
  label: string;
  value: InputType;
}
