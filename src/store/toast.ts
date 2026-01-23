import type { Toast, ToastOptions, ToastState } from '@/types/toast';
import { create } from 'zustand';

export const DEFAULT_TOAST_DURATION = 3000;

export const useToastStore = create<ToastState>((set, get) => ({
  queue: [],
  currentToast: null,
  timerId: null,

  /*
   * addToast → queue push → processQueue → current 설정 → timeout → current 제거 → 다음 processQueue
   */

  addToast: (options: ToastOptions) => {
    const toast: Toast = {
      ...options,
      id: `toast-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`,
      duration: options.duration || DEFAULT_TOAST_DURATION,
    };

    set((state) => ({
      queue: [...state.queue, toast],
    }));

    const { currentToast } = get();

    if (!currentToast) {
      get().processQueue();
    }
  },

  removeToast: (id) => {
    set((state) => ({
      queue: state.queue.filter((t) => t.id !== id),
      currentToast: state.currentToast?.id === id ? null : state.currentToast,
    }));
  },

  processQueue: () => {
    const { queue, currentToast, timerId } = get();

    // 이미 보여지고 있으면 아무 것도 안 함
    if (currentToast) return;

    // queue 비었으면 종료
    if (queue.length === 0) {
      set({ currentToast: null });
      return;
    }

    const [nextToast, ...restToast] = queue;

    // 이전 타이머 정리
    if (timerId) {
      clearTimeout(timerId);
    }

    set({ currentToast: nextToast, queue: restToast });

    const timeoutId = setTimeout(() => {
      //   const state = get();

      //   if (state.currentToast?.id === nextToast.id) {
      //     set({ currentToast: null });
      //     setTimeout(() => {
      //       get().processQueue();
      //     }, 300);
      //   }

      set({ currentToast: null });

      // 애니메이션 여유
      const animationDelay = window.setTimeout(() => {
        get().processQueue();
      }, 300);

      set({ timerId: animationDelay });
    }, nextToast.duration);

    set({ timerId: timeoutId });
  },

  clearQueue: () => {
    const { timerId } = get();
    if (timerId) {
      clearTimeout(timerId);
    }

    set({
      queue: [],
      currentToast: null,
      timerId: null,
    });
  },
}));
