import { MovieAwards } from './../../movie_awards/entities/movie_award.entity';
import { ActorAward } from 'src/actor_awards/entities/actor_award.entity';
import { Movie } from 'src/movies/entities/movie.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('awards')
export class Award {
  @PrimaryColumn({ name: 'award_id' })
  id: number;

  @Column()
  name: string;

  @Column()
  year: number;

  @Column()
  category: string;

  @Column({ name: 'award_type' })
  awardType: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: string;

  @OneToMany(() => MovieAwards, (movieAwards) => movieAwards.award)
  movieAwards: MovieAwards[];

  @OneToMany(() => ActorAward, (actorAward) => actorAward.actor)
  actorAward: ActorAward[];
}
