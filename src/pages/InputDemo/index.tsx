import { useState } from 'react';

import type { InputType } from '@/types/select';
import { cn } from '@/utils';
import { inputDemoTypeOptions } from '@/constants/input';

import { CheckboxInput, LabeledInput } from '@/components/ui/input';
import { LabeledSelect } from '@/components/ui/select';
import Card from '@/components/Card';
import Layout from '@/layouts/MainLayout';

const INIT_ERRORMESSAGE = '에러가 발생했습니다.';

interface Inputptions {
  type: InputType;
  label: string;
  placeholder: string;
  isRequired: boolean;
  isDisabled: boolean;
  isError: boolean;
  errorMessage: string;
}

export default function InputDemo() {
  const [options, setOptions] = useState<Inputptions>({
    type: 'text',
    label: '라벨',
    placeholder: '입력해주세요.',
    isRequired: false,
    isDisabled: false,
    isError: false,
    errorMessage: '',
  });
  const [previewValue, setPreviewValue] = useState('');

  return (
    <>
      <Layout.Header
        title="Input Demo"
        subTitle="Input UI 컴포넌트입니다."
        className="flex justify-between items-start gap-3"
      >
        <Card.Badge
          status={'in-progress'}
          label={'in-progress'}
          className="flex-none"
        />
      </Layout.Header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 좌측: 컨트롤 패널 */}
        <Card>
          <Card.Title title="input 제어" className="mb-4" />

          <div className="flex flex-col gap-3">
            <LabeledSelect
              id="config-type"
              required
              label="타입 설정"
              placeholder="타입을 설정해주세요."
              value={options.type}
              onChange={(e) =>
                setOptions((prev) => ({
                  ...prev,
                  type: e.target.value as InputType,
                }))
              }
              options={inputDemoTypeOptions}
            />

            <LabeledInput
              id="label"
              label="label 텍스트"
              type="text"
              value={options.label}
              onChange={(e) =>
                setOptions((prev) => ({ ...prev, label: e.target.value }))
              }
            />

            <LabeledInput
              id="placeholder"
              label="placeholder 텍스트"
              type="text"
              value={options.placeholder}
              onChange={(e) =>
                setOptions((prev) => ({ ...prev, placeholder: e.target.value }))
              }
            />

            <CheckboxInput
              id="required-checkbox"
              label="필수 여부"
              value={options.isRequired}
              onChange={(checked) => {
                setOptions((prev) => ({ ...prev, isRequired: checked }));
              }}
              className="mt-2"
            />

            <CheckboxInput
              id="disabled-checkbox"
              label="비활성화 여부"
              value={options.isDisabled}
              onChange={(checked) => {
                setOptions((prev) => ({ ...prev, isDisabled: checked }));
              }}
              className="mt-2"
            />

            <CheckboxInput
              id="show-error-checkbox"
              label="에러 스타일 적용"
              value={options.isError}
              onChange={(checked) => {
                setOptions((prev) => ({
                  ...prev,
                  isError: checked,
                  errorMessage: checked
                    ? prev.errorMessage || INIT_ERRORMESSAGE
                    : '',
                }));
              }}
              className="my-2"
            />

            <LabeledInput
              id="error-message"
              label="에러 메세지 내용"
              type="text"
              value={options.errorMessage}
              onChange={(e) =>
                setOptions((prev) => ({
                  ...prev,
                  errorMessage: e.target.value,
                }))
              }
              isDisabled={!options.isError}
            />
          </div>
        </Card>

        <div className={cn('flex flex-col gap-4')}>
          <Card>
            <Card.Title title="미리보기" className="mb-4" />

            <div
              className={cn(
                'relative h-[300px] flex items-center justify-center',
                'bg-gray-50 rounded-lg border-2 border-dashed border-gray-300'
              )}
            >
              <LabeledInput
                id="preview"
                label={options.label}
                type={options.type}
                placeholder={options.placeholder}
                value={previewValue}
                onChange={(e) => setPreviewValue(e.target.value)}
                isDisabled={options.isDisabled}
                required={options.isRequired}
                error={
                  options.isError
                    ? { message: options.errorMessage }
                    : undefined
                }
              />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
