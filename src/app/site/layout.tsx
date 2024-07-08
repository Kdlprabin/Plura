import Navigation from '@/components/site/navigation';
import React from 'react';
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"


interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <ClerkProvider appearance={{ baseTheme: dark }}>
            <main className='h-full'>
                <Navigation />
                {children}
            </main>
        </ClerkProvider>
    );
}

export default Layout;
