import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  created_at: Date;

}