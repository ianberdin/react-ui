import React from 'react';
import './styles/index.scss';

interface ButtonProps {
  /**
   * What is type should the button be?
   */
  type?: 'default' | 'primary' | 'success';
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
  label,
  ...props
}: ButtonProps) => {
  const classes = ['i-button']
  classes.push(`i-button--${size}`)
  classes.push(`i-button--${type}`)
  if (plain) {
    classes.push('is-plain')
  }
  
  return (
    <button
      type="button"
      className={classes.join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
