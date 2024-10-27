import { BeforeInsert, Column, Entity, OneToMany, OneToOne } from "typeorm";
import { CommonEntity } from "./Common.entity";

import * as bcrypt from 'bcrypt';
import { Order } from "./Order.entity";
import { Settings } from "./Settings.entity";

export type UserKey = keyof User;

@Entity()
export class User extends CommonEntity {

    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @BeforeInsert()
    async beforeInsert() {
        this.password = await bcrypt.hash(this.password, 20);
    }

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[];

    @OneToOne(() => Settings, (settings) => settings.user)
    settings: Settings;

}