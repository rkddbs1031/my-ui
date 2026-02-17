import type { GeneralInput as TextInputProps } from '@/types/input';
import { cn } from '@/utils';

import { BaseInput } from './BaseInput';

export default function TextInput({
  maxLength,
  value,
  className = '',
  onChange,
  ...props
}: TextInputProps) {
  const currentLength = String(value || '').length;

  return (
    <div className="relative w-full group">
      <BaseInput
        {...props}
        type="text"
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        className={cn(maxLength && 'pr-20', className)}
      />

      {!!maxLength && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none select-none flex items-center">
          <span
            className={cn(
              'text-[10px] font-mono font-medium px-1.5 py-0.5 rounded-md transition-all duration-200',
              currentLength >= maxLength
                ? 'text-red-600 bg-red-50'
                : 'text-gray-400 bg-gray-50'
            )}
          >
            {currentLength}/{maxLength}
          </span>
        </div>
      )}
    </div>
  );
}
