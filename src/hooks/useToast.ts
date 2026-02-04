import { useToastStore } from '@/store/toast';
import type { ToastOptions } from '@/types/toast';

export function useToast() {
  const addToast = useToastStore((state) => state.addToast);

  const toast = {
    show: (options: ToastOptions) => {
      addToast({ ...options });
    },
  };

  return toast;
}
