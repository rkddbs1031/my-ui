import { useState } from 'react';

import type { PasswordInput as PasswordInputProps } from '@/types/input';
import { cn } from '@/utils';

import { BaseInput } from './BaseInput';
import { EyeIcon } from '@/components/icons/eye';
import { EyeClosedIcon } from '@/components/icons/EyeClosed';

export default function PasswordInput({
  maxLength,
  value,
  showToggle = true,
  className,
  onChange,
  ...props
}: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false);
  const currentLength = String(value || '').length;

  const handleToggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <div className="relative w-full group">
      <BaseInput
        {...props}
        type={isVisible ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        className={cn('pr-24', className)}
      />

      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
        {maxLength && (
          <span
            className={cn(
              'text-[10px] font-mono font-medium px-1.5 py-0.5 rounded-md transition-all duration-200',
              'text-gray-400 bg-gray-50',
              currentLength >= maxLength && 'text-red-600 bg-red-50'
            )}
          >
            {currentLength}/{maxLength}
          </span>
        )}

        {showToggle && (
          <button
            type="button"
            onClick={handleToggleVisibility}
            className="p-1 rounded-md hover:bg-gray-100 text-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200"
            aria-label={isVisible ? '비밀번호 숨기기' : '비밀번호 보기'}
          >
            {isVisible ? <EyeIcon /> : <EyeClosedIcon />}
          </button>
        )}
      </div>
    </div>
  );
}
