import React, {MouseEventHandler, ReactNode} from 'react'
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
   * Is button plain?
   */
  plain?: boolean;
  
  /**
   * Is button round?
   */
  link?: boolean;
  
  /**
   * Is button round?
   */
  round?: boolean;
  
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
   * Button icon. Pass svg component
   */
  icon?: ReactNode
  
  /**
   * Icon or Spinner position in loading state.
   */
  iconPosition?: 'left' | 'right' | 'overlay';
  
  /**
   * Button contents
   */
  children?: ReactNode
  
  /**
   * Optional click handler
   */
  onClick?: (...args: MouseEventHandler<HTMLButtonElement>['arguments']) => void;
}

const SPINNER_SIZE = {
  small: 14,
  medium: 16,
  large: 18,
}
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = 'medium',
  type = 'default',
  plain = false,
  link = false,
  round = false,
  loading = false,
  iconPosition = 'overlay',
  disabled = false,
  icon,
  theme,
  onClick,
  ...props
}: ButtonProps) => {
  const classes = ['i-button']
  classes.push(`i-button--${size}`)
  classes.push(`i-button--${type}`)
  classes.push(`is-icon-${iconPosition}`)
  if (plain) {
    classes.push('is-plain')
  }
  if (link) {
    classes.push('is-link')
  }
  if (round) {
    classes.push('is-round')
  }
  if (loading) {
    classes.push('is-loading')
  }
  if (disabled) {
    classes.push('is-disabled')
  }
  if (theme) {
    classes.push(`theme-${theme}`)
  }
  if (!props.children) {
    classes.push('is-square')
  }
  
  const onClickHandler = (...args: MouseEventHandler<HTMLButtonElement>['arguments']) => {
    if (loading || disabled) return
    
    if (onClick && typeof onClick === 'function') {
      onClick(...args)
    }
  }
  
  const IconOrSpinner = () =>{
    if (loading) {
      return <Spinner size={SPINNER_SIZE[size]} />
    }
    if (icon) {
      return <span className='i-icon'>{icon}</span>
    }
    
    return <></>
  }
  
  return (
    <button
      type="button"
      className={classes.join(' ')}
      onClick={onClickHandler}
      {...props}
    >
      {
        iconPosition === 'left' && <IconOrSpinner />
      }
      {
        props.children
        && <span className="i-button__label">{props.children}</span>
      }
      {
        iconPosition === 'overlay' && <IconOrSpinner />
      }
      {
        iconPosition === 'right' && <IconOrSpinner />
      }
    </button>
  );
};
