type ErrorCode = 'BAD_INPUT' | 'SERVER_ERROR';

export interface iError {
    code: ErrorCode;
    message: string;
}

export interface iValidationState {
    error: iError | null;
    success: boolean | null;
}
