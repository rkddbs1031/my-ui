import { useEffect, useState } from 'react';

import { toastTypeBgMap } from '@/constants/toast';
import { useToast } from '@/hooks/useToast';
import type { Toast as ToastType } from '@/types/toast';
import { cn } from '@/utils';
import XCircle from '@/components/icons/XCircle';

interface ToastProps {
  toast: ToastType;
}

export default function Toast({ toast }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(false);

    const enterTimer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    const exitTimer = setTimeout(() => {
      setIsVisible(false);
    }, (toast.duration || 3000) - 300);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, [toast.id, toast.duration]);

  const { remove } = useToast();

  return (
    <div
      id="toast"
      className={cn(
        'absolute top-1/2 left-1/2 -translate-x-1/2 z-[200]',
        'w-full max-w-[20rem]'
      )}
    >
      <div
        className={cn(
          'transition-transform duration-500 ease-out',
          isVisible ? '-translate-y-1/2' : 'translate-y-[100%]',
          `${toastTypeBgMap[toast.type]} text-white rounded-sm z-[200]`
        )}
      >
        <div
          className={cn(
            'flex flex-row justify-between gap-5',
            'pl-4 pr-3 py-2'
          )}
        >
          <div className={cn('flex flex-col items-start gap-1')}>
            <span className={cn('text-base')}>{toast.title}</span>
            {toast.subtitle && (
              <span className={cn('text-sm')}>{toast.subtitle}</span>
            )}
          </div>
          <button
            type="button"
            className={cn('flex-none')}
            onClick={() => remove(toast.id)}
          >
            <XCircle className="fill-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
