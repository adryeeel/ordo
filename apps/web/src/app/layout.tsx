import '@ordo/ui/styles.css';

import { Inter } from 'next/font/google';

import { ThemeProvider } from '@ordo/ui/provider/theme';
import { MotionProvider } from '@ordo/ui/provider/motion';

interface Props {
    children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({ children }: Props) {
    return (
        <html lang='en' className={inter.variable} suppressHydrationWarning>
            <body>
                <ThemeProvider>
                    <MotionProvider>{children}</MotionProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
