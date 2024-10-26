import { Column, Entity } from "typeorm";
import { CommonEntity } from "./Common.entity";

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
}