import { Column, Entity, OneToOne } from "typeorm";
import { CommonEntity } from "./Common.entity";
import { User } from "./User.entity";

@Entity()
export class Settings extends CommonEntity {

    @Column()
    siteName: string;

    @Column()
    logoUrl: string;

    @Column()
    aboutUs: string;

    @Column()
    contactDetails: string;

    @OneToOne(() => User, (user) => user.settings)
    user: User;
}