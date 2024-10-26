import { Column, Entity } from "typeorm";
import { CommonEntity } from "./Common.entity";

@Entity()
export class Order extends CommonEntity {
    @Column()
    userId: number;

    @Column()
    cargoDetails: string;

    @Column()
    status: string;

    @Column()
    tariffId: number;
}