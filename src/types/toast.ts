export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  title: string;
  subtitle?: string;
  type: ToastType;
  duration: number;
}

export interface ToastOptions {
  title: string;
  subtitle: string;
  duration: number;
  type: ToastType;
}

export interface ToastState {
  queue: Toast[];
  currentToast: Toast | null;
  timerId: number | null;
  addToast: (options: ToastOptions) => void;
  removeToast: (id: string) => void;
  processQueue: () => void;
  clearQueue: () => void;
}
