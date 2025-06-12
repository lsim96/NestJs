import { Movie } from 'src/movies/entities/movie.entity';
import { ProductionCompany } from 'src/production_companies/entities/production_company.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity('movie_production_companies')
export class MovieProductionCompany {
  @Column({
    name: 'investment_amount',
  })
  investmentAmount: number;

  @Column({
    name: 'created_at',
  })
  createdAt: string;

  @PrimaryColumn({
    name: 'movie_id',
  })
  movieId: number;

  @PrimaryColumn({
    name: 'company_id',
  })
  companyId: number;

  @ManyToOne(() => Movie, (movie) => movie.movieProductionCo)
  @JoinColumn({
    name: 'movie_id',
  })
  movie: Movie;

  @ManyToOne(
    () => ProductionCompany,
    (productionCo) => productionCo.movieProductionCo,
  )
  @JoinColumn({
    name: 'company_id',
  })
  productionCompany: ProductionCompany;
}
