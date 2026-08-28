import '@ordo/ui/styles.css';

import { Inter } from 'next/font/google';

import { ThemeProvider } from '@ordo/ui/provider/theme';

interface Props {
    children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({ children }: Props) {
    return (
        <html lang='en' className={inter.variable} suppressHydrationWarning>
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
