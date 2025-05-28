import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  icon
}) => {
  const baseClasses = "font-medium rounded-lg transition-all duration-300 flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg",
    secondary: "bg-dark text-white hover:bg-opacity-90 shadow-md hover:shadow-lg",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  const sizeClasses = "px-6 py-3 text-sm md:text-base";
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;