import { vi } from 'vitest';

export const mockTheme = {
    theme: 'system',
    setTheme: vi.fn<() => void>(),
};
