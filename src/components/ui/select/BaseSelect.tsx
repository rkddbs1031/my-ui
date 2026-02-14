import type { SelectOption } from '@/types/select';
import { cn } from '@/utils';

export interface BaseSelectProps {
  id: string;
  options: SelectOption[];
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  isDisabled?: boolean;
  isError?: boolean;
  className?: string;
}

export function BaseSelect({
  id,
  options,
  value,
  onChange,
  placeholder,
  isDisabled,
  isError,
  className,
}: BaseSelectProps) {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
      className={cn(
        'w-full px-3 py-2 border rounded-lg appearance-none bg-white transition-all focus:outline-none',
        isError ? 'border-red-500' : 'border-gray-300 focus:border-blue-500',
        isDisabled && 'bg-gray-100 cursor-not-allowed opacity-60',
        className
      )}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
