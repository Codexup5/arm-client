export interface ResolvedPromiseResponse<D> {
    success: boolean;
    data: D;
    status: number;
}

export interface Pagination {
    count?: number;
    page: number;
    limit: number;
    total: number;
    lastPage: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    onLimitChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onPageChange?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => void;
    setCount?: React.Dispatch<React.SetStateAction<number>>;
}

export interface PaginationResponseData<D> {
    data: D[];
    meta: Pagination;
}

export interface UpdatedEntityResponse<E> {
    message: string;
    newFields: E;
    success: boolean;
}
