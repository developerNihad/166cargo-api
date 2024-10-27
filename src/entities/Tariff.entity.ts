import { Column, Entity, OneToMany } from "typeorm";
import { CommonEntity } from "./Common.entity";
import { Order } from "./Order.entity";

@Entity()
export class Tariff extends CommonEntity {
    @Column()
    name: string;

    @Column('decimal')
    price: number;

    @Column()
    description: string;

    @OneToMany(() => Order, (order) => order.tariff)
    orders: Order[];
}