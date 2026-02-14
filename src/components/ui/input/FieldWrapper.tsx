import type { ReactNode } from 'react';

interface FieldWrapperProps {
  id: string;
  label?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
  error?: { message: string };
}

export function FieldWrapper({
  id,
  label,
  required,
  error,
  children,
  className = '',
}: FieldWrapperProps) {
  return (
    <div className={className}>
      {label && <Label id={id} label={label} required={required} />}

      <div className="flex flex-col gap-[2px] mt-2">
        {children}
        {error && <FieldErrorMessage message={error.message} />}
      </div>
    </div>
  );
}

interface LabelProps {
  id: string;
  label: string;
  required?: boolean;
}

export function Label({ id, label, required = false }: LabelProps) {
  return (
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
  );
}

interface FieldErrorMessageProps {
  message: string;
}

export function FieldErrorMessage({ message }: FieldErrorMessageProps) {
  if (!message) return null;

  return <span className="text-xs text-red-500 mt-1">{message}</span>;
}
