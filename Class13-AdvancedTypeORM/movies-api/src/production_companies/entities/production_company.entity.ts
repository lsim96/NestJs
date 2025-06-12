import { MovieProductionCompany } from 'src/movie_production_companies/entities/movie_production_company.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('production_companies')
export class ProductionCompany {
  @PrimaryGeneratedColumn({
    name: 'company_id',
  })
  id: number;

  @Column()
  name: string;

  @Column({
    name: 'founding_date',
  })
  foundingDate: string;

  @Column()
  headquarters: string;

  @Column({
    name: 'created_at',
  })
  createdAt: string;

  @OneToMany(
    () => MovieProductionCompany,
    (movieProductionCo) => movieProductionCo.productionCompany,
  )
  movieProductionCo: MovieProductionCompany[];
}
