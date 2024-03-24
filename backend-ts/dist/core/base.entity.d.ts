export declare abstract class BaseEntity<T> {
    id: string;
    isActive: boolean;
    createdAt: number;
    updatedAt: number;
    deletedAt: number | null;
    setDefaultValuesOnInsert(): void;
    setUpdatedAtOnUpdate(): void;
    constructor(partial?: Partial<T>);
    toJSON(): this & {
        createdAt: number;
        updatedAt: number;
        deletedAt: number;
    };
}
