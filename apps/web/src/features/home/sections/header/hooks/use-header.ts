import { useState } from 'react';

export function useHeader() {
    const [open, setOpen] = useState(false);

    return {
        open,
        setOpen,
        close: () => setOpen(false),
    };
}
