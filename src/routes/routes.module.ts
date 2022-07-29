import { Module } from '@nestjs/common';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { Route } from '../@core/domain/route.entity';
import { RouteTypeOrmRepository } from 'src/@core/infra/db/typeorm/route-typeorm.repository';
import { RouteSchema } from 'src/@core/infra/db/typeorm/route.schema';
import { DataSource } from 'typeorm';

import { CreateRouteUseCase } from '../@core/application/create-route.use-case';
import { ListAllRoutesUseCase } from '../@core/application/list-all-routes.use-case';
import { RouteRepositoryInterface } from '../@core/domain/route.repository';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';


@Module({
  imports: [TypeOrmModule.forFeature([RouteSchema])],
  controllers: [RoutesController],
  providers: [RoutesService,
    {
      provide: RouteTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new RouteTypeOrmRepository(dataSource.getRepository(Route));
      },
      inject: [getDataSourceToken()]
    }, {

      provide: CreateRouteUseCase,
      useFactory: (routeRepository: RouteRepositoryInterface) => {
        return new CreateRouteUseCase(routeRepository)
      },
      inject: [RouteTypeOrmRepository]
    }, {

      provide: ListAllRoutesUseCase,
      useFactory: (routeRepository: RouteRepositoryInterface) => {
        return new ListAllRoutesUseCase(routeRepository)
      },
      inject: [RouteTypeOrmRepository]
    }
  ],
})
export class RoutesModule { }
