import React from 'react';

interface AuthProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthProps> = ({ children }) => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            {children}
        </div>
    );
}

export default AuthLayout;
