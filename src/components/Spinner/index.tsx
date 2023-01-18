import React from 'react'
import './styles.scss'

interface SpinnerProps {
  /**
   * How large should the spinner be? In px.
   */
  size?: number;
}

export const Spinner = ({
  size = 40,
  ...props
}: SpinnerProps) => {
  
  return (
    <div
      className="i-spinner"
      style={{width: size, height: size}}
      {...props}
    >
      <div className="i-spinner-inner" >
        <div className="i-spinner-inner__icon"></div>
      </div>
    </div>
  );
};
