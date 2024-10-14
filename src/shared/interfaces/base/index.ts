export interface BaseEntity {
    id: string;
    isActive: boolean;
    isArchived: boolean;
    createDate: Date;
    deleteDate: Date;
    lastChangeDate: Date;
}
