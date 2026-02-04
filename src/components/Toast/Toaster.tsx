import { useToastStore } from '@/store/toast';
import Toast from './Toast';

export default function Toaster() {
  const { currentToast } = useToastStore();

  if (!currentToast) return null;

  return <Toast toast={currentToast} />;
}
