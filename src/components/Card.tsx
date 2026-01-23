import type { JSX } from 'react';
import type { Status } from '@/constants/components';
import { cn } from '@/utils';

interface BaseCardProps {
  className?: string;
}

interface CardProps extends BaseCardProps {
  children: React.ReactNode;
}

function CardContainer({ children, className }: CardProps) {
  const baseClass =
    'p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow';
  return <div className={cn(baseClass, className)}>{children}</div>;
}

interface BadgeProps extends BaseCardProps {
  status: Status;
  label: string;
  children?: React.ReactNode;
}

function Badge({ status, label, className, children }: BadgeProps) {
  const variants = {
    completed: 'bg-green-100 text-green-700',
    'in-progress': 'bg-blue-100 text-blue-700',
    planned: 'bg-gray-100 text-gray-700',
  };

  return (
    <span
      className={cn('text-xs px-2 py-1 rounded', variants[status], className)}
    >
      {children || label}
    </span>
  );
}

interface CardTitleProps extends BaseCardProps {
  title: string;
}

function CardTitle({ title, className }: CardTitleProps) {
  return (
    <h2 className={cn('text-xl font-semibold mb-2', className)}>{title}</h2>
  );
}

interface CardDescriptionProps extends BaseCardProps {
  description: string;
}

function CardDescription({ description, className }: CardDescriptionProps) {
  return (
    <p className={cn('text-gray-600 text-sm', className)}>{description}</p>
  );
}

interface CardComponent {
  (props: CardProps): JSX.Element;
  Badge: typeof Badge;
  Title: typeof CardTitle;
  Description: typeof CardDescription;
}

const Card = CardContainer as CardComponent;
Card.Badge = Badge;
Card.Title = CardTitle;
Card.Description = CardDescription;

export default Card;
