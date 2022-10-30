import {Entity, PrimaryGeneratedColumn,Column} from "typeorm";

@Entity()
export class Course{
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        width: 64,
        unique: true
    })
    courseName: string

    @Column()
    courseDescription: string

    @Column()
    courseCFU: number

    @Column()
    courseYear: number

    @Column()
    courseSemester: number
}