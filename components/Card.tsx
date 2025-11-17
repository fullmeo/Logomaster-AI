import { ReactNode, CSSProperties } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
}

export default function Card({ children, className = '', hover = false, style, onClick }: CardProps) {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 rounded-xl shadow-md p-6
        ${hover ? 'transition-all hover:shadow-xl hover:-translate-y-1' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
