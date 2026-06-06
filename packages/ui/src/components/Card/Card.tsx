import React from 'react';
import styles from './Card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: 'default' | 'outlined' | 'elevated' | 'glass';
  /** Inner padding preset */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Enable hover lift animation */
  hoverable?: boolean;
}

const variantClasses: Record<NonNullable<CardProps['variant']>, string> = {
  default: styles.variantDefault,
  outlined: styles.variantOutlined,
  elevated: styles.variantElevated,
  glass: styles.variantGlass,
};

const paddingClasses: Record<NonNullable<CardProps['padding']>, string> = {
  none: styles.paddingNone,
  sm: styles.paddingSm,
  md: styles.paddingMd,
  lg: styles.paddingLg,
};

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  hoverable = false,
  className,
  children,
  ...rest
}) => {
  const classNames = [
    styles.card,
    variantClasses[variant],
    paddingClasses[padding],
    hoverable ? styles.hoverable : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

Card.displayName = 'Card';
