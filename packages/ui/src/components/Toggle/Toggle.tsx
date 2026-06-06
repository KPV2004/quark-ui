import React, { useId } from 'react';
import styles from './Toggle.module.css';

export interface ToggleProps {
  /** Controlled checked state */
  checked?: boolean;
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Size preset */
  size?: 'sm' | 'md' | 'lg';
  /** Label displayed to the right of the switch */
  label?: string;
  /** Disable interaction */
  disabled?: boolean;
  /** Additional class name for the wrapper */
  className?: string;
}

const sizeClasses: Record<NonNullable<ToggleProps['size']>, string> = {
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
};

export const Toggle: React.FC<ToggleProps> = ({
  checked = false,
  onChange,
  size = 'md',
  label,
  disabled = false,
  className,
}) => {
  const autoId = useId();

  const wrapperClasses = [
    styles.wrapper,
    sizeClasses[size],
    disabled ? styles.disabled : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const trackClasses = [
    styles.track,
    checked ? styles.trackChecked : '',
  ]
    .filter(Boolean)
    .join(' ');

  const thumbClasses = [
    styles.thumb,
    checked ? styles.thumbChecked : '',
  ]
    .filter(Boolean)
    .join(' ');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange?.(e.target.checked);
    }
  };

  return (
    <label className={wrapperClasses}>
      <input
        id={autoId}
        type="checkbox"
        role="switch"
        className={styles.input}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        aria-checked={checked}
      />
      <span className={trackClasses} aria-hidden="true">
        <span className={thumbClasses} />
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

Toggle.displayName = 'Toggle';
