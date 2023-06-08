import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        'font-bold cursor-pointer inline-block leading-none rounded-[3em] border-0',
        {
          'text-xs px-4 py-2.5': size === 'small',
          'text-sm px-5 py-3': size === 'medium',
          'text-base px-6 py-3': size === 'large',
          'text-[white] bg-[#1ea7fd]': primary,
          'text-[#333] bg-transparent shadow-[rgba(0,0,0,0.15)_0px_0px_0px_1px_inset]': !primary,
        }
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
