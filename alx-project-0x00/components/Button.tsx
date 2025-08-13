import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`bg-blue-500 text-white font-semibold py-2 px-4 hover:bg-blue-600 focus:outline-none transition-colors duration-200 ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
