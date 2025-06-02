import { Actor } from 'src/actors/entities/actor.entity';
import { Movie } from 'src/movies/entities/movie.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity('cast_members')
export class CastMember {
  @Column({
    name: 'character_name',
  })
  characterName: string;

  @Column({
    name: 'is_lead_role',
  })
  isLeadRole: boolean;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: string;

  @ManyToOne(() => Movie, (movie) => movie.castMembers)
  @JoinColumn({
    name: 'movie_id',
  })
  movie: Movie;

  @ManyToOne(() => Actor, (actor) => actor.castMembers)
  @JoinColumn({
    name: 'actor_id',
  })
  actor: Actor;
}
