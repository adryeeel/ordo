'use client';

import type { FormEventHandler } from 'react';
import { useState } from 'react';

export function useWaitlistForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return { submitted, handleSubmit };
}
