import type { ComponentType } from 'react';

import type { InputProps } from '@/types/input';

import NumberInput from './NumberInput';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';

type VariantComponentMap = {
  [K in InputProps['type']]: React.ComponentType<
    Extract<InputProps, { type: K }>
  >;
};

const variantComponents: VariantComponentMap = {
  number: NumberInput,
  text: TextInput,
  password: PasswordInput,
  email: TextInput,
  tel: TextInput,
};

export function Input(props: InputProps) {
  const typeKey = props.type as keyof VariantComponentMap;

  const InputComponent = variantComponents[typeKey] as ComponentType<
    Extract<InputProps, { type: typeof props.type }>
  >;

  return <InputComponent {...props} />;
}
