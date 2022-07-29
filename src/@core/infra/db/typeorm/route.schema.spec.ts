import { Route } from "../../../domain/route.entity"
import { DataSource } from "typeorm"
import { RouteSchema } from "./route.schema"

describe('RouteSchema Tests', () => {
  it('create', async () => {
    const dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      entities: [RouteSchema]
    })

    await dataSource.initialize()

    const route = Route.create({
      title: "Test",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
      points: [{ lat: 4, lng: 5 }],
    })

    const routeRepo = dataSource.getRepository(Route)

    await routeRepo.save(route)

    const routeResponse = await routeRepo.findOneBy({ id: route.id })

    expect(routeResponse.toJson()).toEqual(route.toJson())
  })
})