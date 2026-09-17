import { vi } from 'vitest';

export const themeMock = {
    theme: 'system',
    setTheme: vi.fn<() => void>(),
};
