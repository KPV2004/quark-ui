import React from 'react';
import styles from './Spinner.module.css';

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const sizeClasses: Record<NonNullable<SpinnerProps['size']>, string> = {
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color,
  style,
  className,
  ...rest
}) => {
  const classNames = [
    styles.spinner,
    sizeClasses[size],
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  // If a custom color is provided, override the border top color using inline styles
  const mergedStyle: React.CSSProperties = {
    ...style,
    ...(color ? { borderTopColor: color } : {}),
  };

  return (
    <span
      className={classNames}
      style={mergedStyle}
      role="status"
      {...rest}
    >
      <span className={styles.srOnly}>Loading...</span>
    </span>
  );
};

Spinner.displayName = 'Spinner';
