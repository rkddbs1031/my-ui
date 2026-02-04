import { useState } from 'react';

import { cn } from '@/utils';
import type { ToastOptions, ToastType } from '@/types/toast';
import { useToast } from '@/hooks/useToast';
import Layout from '@/layouts/MainLayout';
import {
  Checkbox,
  FieldWrapper,
  NumberInput,
  TextInput,
} from '@/components/Input';
import Card from '@/components/Card';

const ToastTypes: ToastType[] = ['success', 'error', 'warning', 'info'];

const toastTypeBgMap = {
  success: 'bg-green-500 text-white',
  error: 'bg-red-500 text-white',
  warning: 'bg-yellow-500 text-white',
  info: 'bg-blue-500 text-white',
};

export default function Toast() {
  const [options, setOptions] = useState<ToastOptions>({
    title: '',
    subtitle: '',
    duration: 1000,
    type: 'success',
  });

  const [hasSubtitle, setHasSubtitle] = useState(true);

  const isValid = options.title && (!hasSubtitle || options.subtitle);

  const toast = useToast();

  const handleSubmit = () => {
    const { title, subtitle, duration, type } = options;

    toast.show({
      title,
      subtitle,
      duration,
      type,
    });
  };

  return (
    <Layout>
      <Layout.Header
        title="Toast Demo"
        subTitle="queue 형식의 Toast UI 컴포넌트입니다."
        className="flex justify-between items-start gap-3"
      >
        <Card.Badge
          status="in-progress"
          label="in-progress"
          className="flex-none"
        />
      </Layout.Header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 좌측: 컨트롤 패널 */}
        <Card>
          <Card.Title title="Toast 추가" className="mb-4" />
          <div className="flex flex-col gap-4">
            <div id="input-container">
              <p className={cn('text-base font-medium text-gray-700 mb-3')}>
                메시지
              </p>

              <FieldWrapper id="title" label="타이틀" required className="mb-4">
                <TextInput
                  id="title"
                  value={options.title}
                  onChange={(title) =>
                    setOptions((prev) => ({ ...prev, title }))
                  }
                  placeholder="Toast 타이틀을 입력하세요"
                />
              </FieldWrapper>

              <Checkbox
                id="subtitle-checkbox"
                label="서브타이틀 사용"
                checked={hasSubtitle}
                onChange={(checked) => {
                  setHasSubtitle(checked);
                  setOptions((prev) => ({ ...prev, subtitle: '' }));
                }}
                className="mt-3 mb-2"
              />

              <FieldWrapper id="title" label="서브 타이틀">
                <TextInput
                  id="subtitle"
                  value={options.subtitle}
                  onChange={(subtitle) =>
                    setOptions((prev) => ({ ...prev, subtitle }))
                  }
                  placeholder="Toast 서브 타이틀을 입력하세요"
                  isDisabled={!hasSubtitle}
                />
              </FieldWrapper>
            </div>

            <FieldWrapper id="duration" label="지속 시간 (ms)" required>
              <NumberInput
                id="duration"
                value={options.duration}
                onChange={(duration) =>
                  setOptions((prev) => ({ ...prev, duration }))
                }
                step={500}
                min={500}
                max={10000}
              />
            </FieldWrapper>

            <div id="type-container">
              <p className="text-base font-medium text-gray-700 mb-3">타입</p>
              <div className="grid grid-cols-2 gap-2">
                {ToastTypes.map((toastType) => (
                  <button
                    key={toastType}
                    type="button"
                    className={cn(
                      'px-4 py-2 rounded-lg font-medium transition-colors',
                      options.type === toastType
                        ? toastTypeBgMap[toastType]
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    )}
                    onClick={() =>
                      setOptions((prev) => ({ ...prev, type: toastType }))
                    }
                  >
                    {toastType}
                  </button>
                ))}
              </div>
            </div>

            <div className={cn('pt-4 border-t')}>
              <p className={cn('text-base font-[500] mb-4')}> 빠른 테스트</p>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!isValid}
                className={cn(
                  'w-full px-4 py-3 text-sm font-semibold rounded-lg transition-colors',
                  isValid
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                )}
              >
                테스트 해 보기
              </button>
            </div>
          </div>
        </Card>

        {/* 우측: Toast 미리보기 영역 */}
        <Card>
          <Card.Title title="미리보기" className="mb-4" />

          <div className="relative h-[500px] bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* Toast가 여기에 표시될 예정 */}
              <p className="text-gray-400 text-center">
                Toast가 여기에 표시됩니다
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
