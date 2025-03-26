import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const baseClasses = 'rounded font-medium text-center transition-colors';

  const variantClasses = {
    primary: 'bg-red-600 hover:transition text-white',
    secondary: 'bg-transparent border border-white hover:bg-white hover:text-black text-white',
    outline: 'border border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
  };

  const sizeClasses = {
    sm: 'px-4 py-2',
    md: 'px-6 py-3',
    lg: 'px-8 py-4'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
