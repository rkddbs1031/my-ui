import { useState } from 'react';

import type { InputType } from '@/types/input';
import { cn } from '@/utils';
import { inputDemoTypeOptions } from '@/constants/input';

import { CheckboxInput, LabeledInput } from '@/components/ui/input';
import { LabeledSelect } from '@/components/ui/select';
import Card from '@/components/Card';
import Layout from '@/layouts/MainLayout';

const INIT_ERRORMESSAGE = '형식에 맞지 않는 입력입니다.';

interface InputOptions {
  type: InputType;
  label: string;
  isHiddenLabel: boolean;
  placeholder: string;
  isRequired: boolean;
  isDisabled: boolean;
  isError: boolean;
  errorMessage: string;
  maxLength?: number;
  hideSpinner: boolean;
  showToggle: boolean;
}

export default function InputDemo() {
  const [options, setOptions] = useState<InputOptions>({
    type: 'text',
    isHiddenLabel: true,
    label: '라벨',
    placeholder: '입력해주세요.',
    isRequired: false,
    isDisabled: false,
    isError: false,
    errorMessage: '',
    maxLength: 20,
    hideSpinner: false,
    showToggle: true,
  });

  const [previewValue, setPreviewValue] = useState('');

  const handleUpdateOption = (key: keyof InputOptions, value: any) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

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
          <Card.Title title="input 컴포넌트 제어" className="mb-4" />

          <div className="space-y-4">
            <LabeledSelect
              id="config-type"
              required
              label="타입 설정"
              placeholder="타입을 설정해주세요."
              value={options.type}
              onChange={(e) => handleUpdateOption('type', e.target.value)}
              options={inputDemoTypeOptions}
            />

            <div className="grid grid-cols-2 gap-4">
              <CheckboxInput
                id="label-toggle"
                label="라벨 표시"
                value={options.isHiddenLabel}
                onChange={(checked) =>
                  handleUpdateOption('isHiddenLabel', checked)
                }
              />

              <CheckboxInput
                id="required-toggle"
                label="필수 입력"
                value={options.isRequired}
                onChange={(checked) =>
                  handleUpdateOption('isRequired', checked)
                }
              />
            </div>

            <LabeledInput
              id="label-text"
              label="label 텍스트"
              type="text"
              value={options.label}
              onChange={(e) => handleUpdateOption('label', e.target.value)}
              isDisabled={!options.isHiddenLabel}
            />

            <hr className="border-gray-100" />

            <LabeledInput
              id="placeholder"
              label="placeholder 텍스트"
              type="text"
              value={options.placeholder}
              onChange={(e) =>
                handleUpdateOption('placeholder', e.target.value)
              }
            />

            <hr className="border-gray-100" />

            <CheckboxInput
              id="disabled-checkbox"
              label="비활성화 여부"
              value={options.isDisabled}
              onChange={(checked) => handleUpdateOption('isDisabled', checked)}
            />

            {options.type !== 'number' && (
              <LabeledInput
                id="max-length"
                label="최대 글자 수 (maxLength)"
                type="number"
                value={options.maxLength || ''}
                onChange={(e) =>
                  handleUpdateOption('maxLength', Number(e.target.value))
                }
                placeholder="제한 없음"
              />
            )}

            {options.type === 'password' && (
              <CheckboxInput
                id="show-toggle"
                label="비밀번호 보기 버튼 사용"
                value={options.showToggle}
                onChange={(checked) =>
                  handleUpdateOption('showToggle', checked)
                }
              />
            )}

            {options.type === 'number' && (
              <CheckboxInput
                id="hide-spinner"
                label="숫자 스피너 숨기기"
                value={options.hideSpinner}
                onChange={(checked) =>
                  handleUpdateOption('hideSpinner', checked)
                }
              />
            )}

            <hr className="border-gray-100" />

            <div className="space-y-4">
              <CheckboxInput
                id="error-toggle"
                label="에러 상태 강제 적용"
                value={options.isError}
                onChange={(checked) => {
                  handleUpdateOption('isError', checked);
                  if (checked && !options.errorMessage)
                    handleUpdateOption('errorMessage', INIT_ERRORMESSAGE);
                }}
              />
              <LabeledInput
                id="error-msg"
                label="에러 메시지"
                type="text"
                value={options.errorMessage}
                onChange={(e) =>
                  handleUpdateOption('errorMessage', e.target.value)
                }
                isDisabled={!options.isError}
              />
            </div>
          </div>
        </Card>

        <div className={cn('flex flex-col gap-4')}>
          <Card>
            <Card.Title title="실시간 미리보기" className="mb-4" />

            <div
              className={cn(
                'relative h-[300px] flex items-center justify-center',
                'bg-gray-50 rounded-lg border-2 border-dashed border-gray-300'
              )}
            >
              <div className="w-full max-w-xs">
                <LabeledInput
                  id="preview-input"
                  type={options.type}
                  label={options.isHiddenLabel ? options.label : ''}
                  placeholder={options.placeholder}
                  value={previewValue}
                  onChange={(e) => setPreviewValue(e.target.value)}
                  isDisabled={options.isDisabled}
                  required={options.isRequired}
                  maxLength={options.maxLength}
                  hideSpinner={options.type === 'number' && options.hideSpinner}
                  showToggle={options.type === 'password' && options.showToggle}
                  error={
                    options.isError
                      ? { message: options.errorMessage }
                      : undefined
                  }
                />
              </div>
            </div>
          </Card>

          <Card className="bg-gray-900 text-gray-300 p-4 font-mono text-xs">
            <pre>
              {JSON.stringify(
                {
                  type: options.type,
                  value: previewValue,
                  length: previewValue.length,
                },
                null,
                2
              )}
            </pre>
          </Card>
        </div>
      </div>
    </>
  );
}
