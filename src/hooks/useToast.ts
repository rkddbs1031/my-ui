import { useToastStore } from '@/store/toast';
import type { ToastOptions } from '@/types/toast';

export function useToast() {
  const addToast = useToastStore((state) => state.addToast);
  const removeToast = useToastStore((state) => state.removeToast);

  const toast = {
    show: (options: ToastOptions) => {
      addToast({ ...options });
    },
    remove: (id: string) => {
      removeToast(id);
    },
  };

  return toast;
}
