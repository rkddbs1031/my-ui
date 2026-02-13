import Home from '@/pages/Home';
import ToastDemo from '@/pages/ToastDemo';

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

export const routes: RouteConfig[] = [
  { path: '/', element: <Home /> },
  { path: '/toast', element: <ToastDemo /> },
];
