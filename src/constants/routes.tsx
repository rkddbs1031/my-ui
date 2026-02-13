import { lazy, type ReactNode } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const ToastDemo = lazy(() => import('@/pages/ToastDemo'));

interface RouteConfig {
  path: string;
  element: ReactNode;
}

export const ROUTES_CONFIG: RouteConfig[] = [
  { path: '/', element: <Home /> },
  { path: '/toast', element: <ToastDemo /> },
];
