import { useToastStore } from '@/store/toast';
import Toast from './Toast';

export function Toaster() {
  const { currentToast } = useToastStore();

  if (!currentToast) return null;

  return <Toast toast={currentToast} />;
}
