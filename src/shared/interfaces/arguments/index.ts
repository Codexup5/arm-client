export interface FindSome<F = any> {
    page: number;
    limit: number;
    searchBy?: string;
    relations?: string;
    filters?: Partial<F>;
}
