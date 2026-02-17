import { useState } from 'react';

import { toastTypeBgMap } from '@/constants/toast';
import { cn } from '@/utils';
import type { ToastOptions, ToastType } from '@/types/toast';
import { useToast } from '@/hooks/useToast';
import { useToastStore } from '@/store/toast';

import Layout from '@/layouts/MainLayout';
import Card from '@/components/Card';
import { Toaster } from '@/components/ui/toast';
import { LabeledInput, CheckboxInput } from '@/components/ui/input';

const ToastTypes: ToastType[] = ['success', 'error', 'warning', 'info'];

export default function Toast() {
  const [options, setOptions] = useState<ToastOptions>({
    title: '',
    subtitle: '',
    duration: 3000,
    type: 'success',
  });

  const [hasSubtitle, setHasSubtitle] = useState(true);

  const isValid = options.title && (!hasSubtitle || options.subtitle);

  const toast = useToast();
  const { queue, currentToast } = useToastStore();

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
    <>
      <Layout.Header
        title="Toast Demo"
        subTitle="queue 형식의 Toast UI 컴포넌트입니다."
        className="flex justify-between items-start gap-3"
      >
        <Card.Badge
          status="completed"
          label="completed"
          className="flex-none"
        />
      </Layout.Header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 좌측: 컨트롤 패널 */}
        <Card>
          <Card.Title title="Toast 추가" className="mb-4" />

          <div className="flex flex-col gap-4">
            <div id="input-container">
              <span
                className={cn('block text-base font-medium text-gray-700 mb-3')}
              >
                메시지
              </span>

              <LabeledInput
                id="title"
                label="타이틀"
                required
                type="text"
                value={options.title}
                onChange={(e) =>
                  setOptions((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="Toast 타이틀을 입력하세요"
              />

              <CheckboxInput
                id="subtitle-checkbox"
                label="서브타이틀 사용"
                value={hasSubtitle}
                onChange={(checked) => {
                  setHasSubtitle(checked);
                  setOptions((prev) => ({ ...prev, subtitle: '' }));
                }}
                className="my-4"
              />

              <LabeledInput
                id="subTitle"
                label="서브 타이틀"
                type="text"
                value={options.subtitle}
                onChange={(e) =>
                  setOptions((prev) => ({ ...prev, subtitle: e.target.value }))
                }
                placeholder="Toast 서브 타이틀을 입력하세요"
                isDisabled={!hasSubtitle}
              />
            </div>

            <LabeledInput
              id="toast-duration"
              type="number"
              label="지속 시간 (ms)"
              value={options.duration}
              required
              step={500}
              min={500}
              max={10000}
              onChange={(e) => {
                const { value } = e.target;
                setOptions((prev) => ({
                  ...prev,
                  duration: value === '' ? 0 : Number(value),
                }));
              }}
            />

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
                        ? `${toastTypeBgMap[toastType]} text-white`
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
        <div className={cn('flex flex-col gap-4')}>
          <Card>
            <Card.Title title="미리보기" className="mb-4" />

            <div className="relative h-[300px] bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Toast가 여기에 표시될 예정 */}
                <p className="text-gray-400 text-center">
                  Toast가 여기에 표시됩니다.
                </p>
              </div>
              <Toaster />
            </div>
          </Card>

          <Card className="bg-gray-900 text-gray-300 p-4 font-mono text-xs">
            <pre>
              {JSON.stringify(
                {
                  currentToast,
                  queue,
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
