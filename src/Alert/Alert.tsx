import cx from 'classnames';
import * as React from 'react';
import CloseIcon from '../../assets/icons/close.svg';
import { twMerge } from 'tailwind-merge';

import SuccessIcon from '../../assets/icons/success.svg';
import ErrorIcon from '../../assets/icons/error.svg';
import WarningIcon from '../../assets/icons/warning.svg';
import InfoIcon from '../../assets/icons/info.svg';

export type AlertBaseType = 'error' | 'success' | 'info' | 'warning';

export type AlertBase = {
  /**
   *   Alert type
   */
  type: AlertBaseType;

  /**
   *   Alert Message content
   */
  content?: string;

  /**
   *   Alert Message content
   */
  message: string;

  /**
   *   Alert filled state
   */
  filled?: boolean;

  /**
   *   Alert outlined state
   */
  outlined?: boolean;

  onClose?: () => void;

  /**
   *   Alert className
   */
  className?: string;
};

const icons = {
  error: <ErrorIcon />,
  success: <SuccessIcon />,
  info: <InfoIcon />,
  warning: <WarningIcon />,
};

/**
 * Alert component
 */
export const Alert = ({
  type = 'success',
  message,
  content,
  outlined = false,
  filled = true,
  onClose,
  className,
}: AlertBase) => {
  const alertContainer = twMerge(
    cx(
      'flex p-4 gap-2 min-w-[400px] w-fit max-w-[500px] rounded-lg pointer-events-auto h-full',
      {
        'border border-solid rounded-lg': outlined,
        'border-red-base': outlined && !filled && type === 'error',
        'border-blue-base': outlined && !filled && type === 'info',
        'border-yellow-base': outlined && !filled && type === 'warning',
        'border-green-base': outlined && !filled && type === 'success',

        'bg-red-base': filled && type === 'error',
        'bg-blue-base ': filled && type === 'info',
        'bg-yellow-base': filled && type === 'warning',
        'bg-green-500': filled && type === 'success',

        'border-red-light': filled && outlined && type === 'error',
        'border-blue-light': filled && outlined && type === 'info',
        'border-yellow-light': filled && outlined && type === 'warning',
        'border-green-light': filled && outlined && type === 'success',

        'bg-green-light text-green-dark': type === 'success' && !filled,
        'bg-yellow-light text-yellow-dark': type === 'warning' && !filled,
        'bg-red-light text-red-dark': type === 'error' && !filled,
        'bg-blue-light text-blue-dark': type === 'info' && !filled,

        'flex-col': content,
        'items-center': !content,
      },
      className
    )
  );

  const alertIcon = cx({
    'text-green-base': type === 'success' && !filled,
    'text-yellow-base': type === 'warning' && !filled,
    'text-red-base': type === 'error' && !filled,
    'text-blue-base': type === 'info' && !filled,

    'text-[#fff]': filled,
  });

  const messageStyle = cx('grow break-all', {
    'text-white': filled,
    'font-semibold': content,
  });

  const contentStyle = cx('grow text-xs', {
    'text-white': filled,
  });

  const closeIconStyle = cx(
    'min-w-[32px] min-h-[32px] w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-700 hover:bg-opacity-40 cursor-pointer',
    {
      'text-white': filled,
      'relative -top-1 -right-1': content,
    }
  );

  return content ? (
    <div className={alertContainer}>
      <div className="flex gap-2 w-full">
        <span className={alertIcon}>{icons[type]}</span>
        <div className="flex flex-col grow">
          <div className={messageStyle}>{message}</div>
          <div className={contentStyle}>{content}</div>
        </div>
        <div className={closeIconStyle} onClick={onClose}>
          <CloseIcon className="w-4 h-4" />
        </div>
      </div>
    </div>
  ) : (
    <div className={alertContainer}>
      <div className={alertIcon}>{icons[type]}</div>
      <div className={messageStyle}>{message}</div>
      <div className={closeIconStyle} onClick={onClose}>
        <CloseIcon className="w-4 h-4" />
      </div>
    </div>
  );
};
