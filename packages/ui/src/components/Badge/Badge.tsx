import React from 'react';
import styles from './Badge.module.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color variant */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  /** Size preset */
  size?: 'sm' | 'md' | 'lg';
  /** Show a coloured dot indicator */
  dot?: boolean;
  /** Use outline style instead of filled */
  outline?: boolean;
}

const sizeClasses: Record<NonNullable<BadgeProps['size']>, string> = {
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
};

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: styles.variantDefault,
  primary: styles.variantPrimary,
  success: styles.variantSuccess,
  warning: styles.variantWarning,
  danger: styles.variantDanger,
  info: styles.variantInfo,
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  dot = false,
  outline = false,
  className,
  children,
  ...rest
}) => {
  const classNames = [
    styles.badge,
    sizeClasses[size],
    variantClasses[variant],
    outline ? styles.outline : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classNames} {...rest}>
      {dot && <span className={`${styles.dot} ${styles.dotPulse}`} aria-hidden="true" />}
      {children}
    </span>
  );
};

Badge.displayName = 'Badge';
