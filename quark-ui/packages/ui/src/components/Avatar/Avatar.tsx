import React, { useState } from 'react';
import styles from './Avatar.module.css';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square';
  status?: 'online' | 'offline' | 'away' | 'busy';
}

const sizeClasses: Record<NonNullable<AvatarProps['size']>, string> = {
  xs: styles.sizeXs,
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
  xl: styles.sizeXl,
};

const shapeClasses: Record<NonNullable<AvatarProps['shape']>, string> = {
  circle: styles.shapeCircle,
  square: styles.shapeSquare,
};

const statusClasses: Record<NonNullable<AvatarProps['status']>, string> = {
  online: styles.statusOnline,
  offline: styles.statusOffline,
  away: styles.statusAway,
  busy: styles.statusBusy,
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  fallback,
  size = 'md',
  shape = 'circle',
  status,
  className,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  const wrapperClasses = [
    styles.avatar,
    sizeClasses[size],
    shapeClasses[shape],
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const showImage = src && !hasError;

  return (
    <div className={wrapperClasses} {...rest}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className={styles.image}
          onError={() => setHasError(true)}
        />
      ) : (
        <span className={styles.fallback}>{fallback}</span>
      )}

      {status && (
        <span
          className={`${styles.statusDot} ${statusClasses[status]}`}
          aria-label={status}
          role="status"
        />
      )}
    </div>
  );
};

Avatar.displayName = 'Avatar';
