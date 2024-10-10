interface HttpError extends Error {
    response: {
        status: number;
    };
}

export const getErrorInstance = (error: unknown): HttpError => {
    if (!(error instanceof Error)) {
        throw new Error('Wrong instance provided!');
    }

    return error as HttpError;
};
