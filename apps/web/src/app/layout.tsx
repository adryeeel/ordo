import '@ordo/ui/global.css';

import { Geist } from 'next/font/google';
import { ThemeProvider } from '@ordo/ui/provider/theme';

interface Props {
    children: React.ReactElement;
}

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({ children }: Props) {
    return (
        <html lang='en' className={geist.variable} suppressHydrationWarning>
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
