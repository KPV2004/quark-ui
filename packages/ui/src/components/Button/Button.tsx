import React, { forwardRef } from 'react';
import styles from './Button.module.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /** Size preset */
  size?: 'sm' | 'md' | 'lg';
  /** Show loading spinner and disable interaction */
  isLoading?: boolean;
  /** Icon element placed before the label */
  leftIcon?: React.ReactNode;
  /** Icon element placed after the label */
  rightIcon?: React.ReactNode;
  /** Stretch to fill container width */
  fullWidth?: boolean;
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
};

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: styles.variantPrimary,
  secondary: styles.variantSecondary,
  outline: styles.variantOutline,
  ghost: styles.variantGhost,
  danger: styles.variantDanger,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      className,
      children,
      type = 'button',
      ...rest
    },
    ref,
  ) => {
    const classNames = [
      styles.button,
      sizeClasses[size],
      variantClasses[variant],
      fullWidth ? styles.fullWidth : '',
      isLoading ? styles.loading : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type={type}
        className={classNames}
        disabled={disabled || isLoading}
        aria-busy={isLoading || undefined}
        aria-disabled={disabled || isLoading || undefined}
        {...rest}
      >
        {isLoading && (
          <span className={styles.spinnerWrapper} aria-hidden="true">
            <span className={styles.spinner} />
          </span>
        )}
        {leftIcon && <span className={styles.iconLeft}>{leftIcon}</span>}
        {children}
        {rightIcon && <span className={styles.iconRight}>{rightIcon}</span>}
      </button>
    );
  },
);

Button.displayName = 'Button';
