export type Mode = 'edit' | 'view';

export interface Secton<N> {
    name: N;
    mode: Mode;
}
