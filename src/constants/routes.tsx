import { lazy, type ReactNode } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const ToastDemo = lazy(() => import('@/pages/ToastDemo'));
const InputDemo = lazy(() => import('@/pages/InputDemo'));

interface RouteConfig {
  path: string;
  element: ReactNode;
}

export const ROUTES_CONFIG: RouteConfig[] = [
  { path: '/', element: <Home /> },
  { path: '/toast', element: <ToastDemo /> },
  { path: '/input', element: <InputDemo /> },
];
