import { BeforeInsert, BeforeUpdate, Column, PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseEntity<T> {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column()
    is_active: boolean;
  
    @Column({ type: 'bigint' })
    created_at: number;
  
    @Column({ type: 'bigint' })
    updated_at: number;
  
    @Column({ type: 'bigint', nullable: true })
    deleted_at: number | null;

    @BeforeInsert()
    setDefaultValuesOnInsert() {
        this.is_active = true;
        const currentTime = new Date().getTime();
        this.created_at = currentTime;
        this.updated_at = currentTime;
    }

    @BeforeUpdate()
    setUpdatedAtOnUpdate() {
        this.updated_at = new Date().getTime();
    }

    constructor(partial?: Partial<T>) {
        Object.assign(this, partial);
    }
}