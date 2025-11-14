import React from 'react';

type ButtonProps = {
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
    ariaLabel?: string;
};

const Button: React.FC<ButtonProps> = ({
    children = 'Button',
    onClick,
    type = 'button',
    className,
    disabled = false,
    ariaLabel,
}) => {
    const defaultClass =
        'md:ml-10 w-full sm:w-auto cursor-pointer text-black-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-black-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800';
    const combinedClassName = [defaultClass, className].filter(Boolean).join(' ');

    return (
        <button
            type={type}
            onClick={onClick}
            className={combinedClassName}
            disabled={disabled}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
};

export default Button;
