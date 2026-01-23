import type { JSX, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface BaseLayoutProps {
  children: ReactNode;
  className?: string;
}

interface HeaderProps {
  title: string;
  subTitle?: string;
}

interface LayoutComponent {
  (props: BaseLayoutProps): JSX.Element;
  Container: typeof Container;
  Header: typeof Header;
  Content: typeof Content;
}

function Container({ children, className }: BaseLayoutProps) {
  return (
    <div className={cn(className, 'min-h-screen bg-gray-50')}>
      <main className="max-w-5xl mx-auto p-8">{children}</main>
    </div>
  );
}

function Header({ title, subTitle }: HeaderProps) {
  return (
    <header className="mb-12">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      {subTitle && <p className="text-gray-600">{subTitle}</p>}
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
