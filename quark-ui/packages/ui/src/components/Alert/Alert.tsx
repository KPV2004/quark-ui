import React from 'react';
import styles from './Alert.module.css';
import { FiInfo, FiCheckCircle, FiAlertTriangle, FiXCircle } from 'react-icons/fi';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  onClose?: () => void;
}

const variantClasses: Record<NonNullable<AlertProps['variant']>, string> = {
  info: styles.variantInfo,
  success: styles.variantSuccess,
  warning: styles.variantWarning,
  danger: styles.variantDanger,
};

const iconMap: Record<NonNullable<AlertProps['variant']>, React.ReactNode> = {
  info: <FiInfo />,
  success: <FiCheckCircle />,
  warning: <FiAlertTriangle />,
  danger: <FiXCircle />,
};


export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  onClose,
  className,
  children,
  ...rest
}) => {
  const classNames = [
    styles.alert,
    variantClasses[variant],
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} role="alert" {...rest}>
      <span className={styles.icon} aria-hidden="true">
        {iconMap[variant]}
      </span>
      <div className={styles.content}>
        {title && <h5 className={styles.title}>{title}</h5>}
        {children && <div className={styles.description}>{children}</div>}
      </div>
      {onClose && (
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Dismiss alert"
        >
          ✕
        </button>
      )}
    </div>
  );
};


Alert.displayName = 'Alert';
