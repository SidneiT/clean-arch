import { DataSource } from 'typeorm';

import { Route } from '../../../domain/route.entity';
import { RouteTypeOrmRepository } from './route-typeorm.repository';
import { RouteSchema } from './route.schema';

describe('RoutTypeOrmRepository', () => {

  it('create', async () => {
    const dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      entities: [RouteSchema]
    })

    await dataSource.initialize()

    const ormRepo = dataSource.getRepository(Route)
    const repository = new RouteTypeOrmRepository(ormRepo)

    const route = Route.create({
      title: "Test",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
      points: [{ lat: 4, lng: 5 }],
    })

    await repository.insert(route);

    const routesResult = await ormRepo.findOneBy({ id: route.id });

    expect(routesResult.toJson()).toEqual(route.toJson())
  })

});