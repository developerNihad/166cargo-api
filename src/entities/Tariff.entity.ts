import { Column, Entity } from "typeorm";
import { CommonEntity } from "./Common.entity";

@Entity()
export class Tariff extends CommonEntity {
    @Column()
    name: string;

    @Column('decimal')
    price: number;

    @Column()
    description: string;
}