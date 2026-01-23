import { cn } from '@/utils';

interface FieldWrapperProps {
  id: string;
  label: string;
  required?: boolean;
  error?: { message: string } | null;
  children: React.ReactNode;
  className?: string;
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
      <Label id={id} label={label} required={required} />
      <div className="flex flex-col gap-[2px] mt-2">
        {children}
        {error && <span className="text-xs text-red-500">{error.message}</span>}
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

interface BaseInputProps<T> {
  id: string;
  value: T;
  onChange?: (value: T) => void;
  placeholder?: string;
  maxLength?: number;
  isDisabled?: boolean;
  className?: string;
}

interface BaseInputInternalProps<T> extends BaseInputProps<T> {
  type: 'text' | 'number';
}

export function BaseInput<T extends string | number>({
  type,
  value,
  onChange,
  isDisabled = false,
  className,
  ...rest
}: BaseInputInternalProps<T>) {
  return (
    <input
      type={type}
      value={value}
      disabled={isDisabled}
      onChange={(e) =>
        onChange?.(
          type === 'number'
            ? (Number(e.target.value) as T)
            : (e.target.value as T)
        )
      }
      className={cn(
        'w-full px-3 py-2',
        'border border-gray-300 rounded-lg focus:outline-none',
        className
      )}
      {...rest}
    />
  );
}

interface TextInputProps extends BaseInputProps<string> {}

export function TextInput(props: TextInputProps) {
  return <BaseInput type="text" {...props} />;
}

interface NumberInputProps extends BaseInputProps<number> {
  step?: number;
  min?: number;
  max?: number;
}

export function NumberInput(props: NumberInputProps) {
  return <BaseInput type="number" {...props} />;
}

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
  isDisabled?: boolean;
  className?: string;
}

export function Checkbox({
  id,
  label,
  checked,
  onChange,
  isDisabled,
  className = '',
}: CheckboxProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        disabled={isDisabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
      />
      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-700 select-none"
      >
        {label}
      </label>
    </div>
  );
}
