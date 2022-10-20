import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_todos"})
export class Todo {

@PrimaryGeneratedColumn()
id: number

@IsNotEmpty()
@Column({length: 200, nullable: false})
tasks: string

@IsNotEmpty()
@Column({nullable: false})
deeds: boolean
    
}
