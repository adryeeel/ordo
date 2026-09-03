import '@ordo/ui/styles.css';

import { Geist } from 'next/font/google';

import { ThemeProvider } from '@ordo/ui/provider/theme';
import { MotionProvider } from '@ordo/ui/provider/motion';

interface Props {
    children: React.ReactNode;
}

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({ children }: Props) {
    return (
        <html lang='en' className={geist.variable} suppressHydrationWarning>
            <body>
                <ThemeProvider>
                    <MotionProvider>{children}</MotionProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
