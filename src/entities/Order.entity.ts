import { Column, Entity, ManyToOne } from "typeorm";
import { CommonEntity } from "./Common.entity";
import { User } from "./User.entity";
import { Tariff } from "./Tariff.entity";

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

    @ManyToOne(() => User, (user) => user.orders)
    user: User;

    @ManyToOne(() => Tariff, (tariff) => tariff.orders)
    tariff: Tariff;
}