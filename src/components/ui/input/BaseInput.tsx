import type { InputProps } from '@/types/input';
import { cn } from '@/utils';

export function BaseInput({
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
        isDisabled && 'bg-gray-100 cursor-not-allowed opacity-60',
        className
      )}
      {...rest}
    />
  );
}
