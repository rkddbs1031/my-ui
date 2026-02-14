import type { TextInputType } from '@/components/ui/input';

export interface SelectOption {
  label: string;
  value: TextInputType | 'number';
}
