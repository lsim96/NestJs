import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'country',
  })
  country: string;

  @Column({
    name: 'city',
  })
  city: string;

  @Column({
    name: 'street',
  })
  street: string;

  @Column({
    name: 'zip_code',
  })
  zipCode: string;

  @OneToOne(() => User, (user) => user.userAddress)
  @JoinColumn({
    name: 'user_id',
  })
  user: User;
}
