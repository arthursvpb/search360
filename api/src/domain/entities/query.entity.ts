import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Query {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  searchTerm: string;

  @CreateDateColumn()
  createdAt: Date;
}
