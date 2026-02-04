import type { JSX, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { cn } from '@/utils/cn';

interface BaseLayoutProps {
  children?: ReactNode;
  className?: string;
}

interface HeaderProps extends BaseLayoutProps {
  title: string;
  subTitle?: string;
}

interface LayoutComponent {
  (props: BaseLayoutProps): JSX.Element;
  Container: typeof Container;
  Header: typeof Header;
  Content: typeof Content;
}

function Container({ className }: BaseLayoutProps) {
  return (
    <div className={cn(className, 'min-h-screen bg-gray-50')}>
      <main className="max-w-5xl mx-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}

function Header({ title, subTitle, children, className }: HeaderProps) {
  return (
    <header className={cn('mb-12', className)}>
      <div>
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        {subTitle && <p className="text-gray-600">{subTitle}</p>}
      </div>
      {children}
    </header>
  );
}

function Content({ children, className }: BaseLayoutProps) {
  return <div className={cn(className)}>{children}</div>;
}

const Layout = Container as LayoutComponent;
Layout.Container = Container;
Layout.Header = Header;
Layout.Content = Content;

export default Layout;
