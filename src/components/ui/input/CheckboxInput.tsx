import type { ChangeEvent } from 'react';

import { cn } from '@/utils';
import { Label, type BaseInput } from '.';

interface CheckboxProps extends Omit<BaseInput, 'onChange'> {
  label: string;
  value: boolean;
  required?: boolean;
  onChange?: (checked: boolean) => void;
}

export function CheckboxInput({
  id,
  label,
  value,
  onChange,
  isDisabled,
  required,
  className = '',
}: CheckboxProps) {
  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <input
        type="checkbox"
        id={id}
        checked={value}
        disabled={isDisabled}
        onChange={handleToggle}
        className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
      />
      <Label id={id} label={label} required={required} />
    </div>
  );
}
