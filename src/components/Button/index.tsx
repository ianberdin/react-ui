import React from 'react';
import './styles/index.scss';

import {Spinner} from '@/components/Spinner'


interface ButtonProps {
  /**
   * What is type should the button be?
   */
  type?: 'default' | 'primary' | 'success' | 'danger' | 'info' | 'warning';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Is button plain?
   */
  plain?: boolean;
  
  /**
   * Is button disabled?
   */
  disabled?: boolean;
  /**
   * Is button in loading state?
   */
  loading?: boolean;
  
  /**
   * Override default page theme
   */
  theme?: 'light' | 'dark'
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = 'medium',
  type = 'default',
  plain = false,
  loading = false,
  disabled = false,
  theme,
  label,
  ...props
}: ButtonProps) => {
  const classes = ['i-button']
  classes.push(`i-button--${size}`)
  classes.push(`i-button--${type}`)
  if (plain) {
    classes.push('is-plain')
  }
  if (theme) {
    classes.push(`theme-${theme}`)
  }
  
  return (
    <button
      type="button"
      className={classes.join(' ')}
      {...props}
    >
      <span>{label}</span>
      {
        loading && <Spinner size={30} />
      }
    </button>
  );
};
