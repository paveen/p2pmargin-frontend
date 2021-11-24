import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = (props) => {
  const {
    variant,
    size,
    textColor,
    children,
    fullWidth,
    className,
    borderColor,
  } = props;
  return (
    <button
      className={classNames(
        variant === 'filled' && 'bg-skyblue-450',
        variant === 'outlined' && 'border-2 bg-white',
        size === 'small' && 'px-4 py-1.5 rounded-md',
        size === 'medium' && 'px-8 py-2 text-2xl rounded-xl',
        size === 'large' && ' px-12 py-4 text-2xl rounded-xl',
        textColor === 'black' && 'text-black',
        textColor === 'white' && 'text-white',
        borderColor === 'black' && 'border-black',
        borderColor === 'white' && 'border-white',
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['outlined', 'filled']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  textColor: PropTypes.oneOf(['black', 'white']),
  borderColor: PropTypes.oneOf(['black', 'white']),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Button.defaultProps = {
  variant: 'filled',
  size: 'small',
  textColor: 'white',
};
