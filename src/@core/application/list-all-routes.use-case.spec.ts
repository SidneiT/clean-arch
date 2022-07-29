import { RouteInMemoryRepository } from "../infra/db/in-memory/route-in-memory.repository";
import { CreateRouteUseCase } from "./create-route.use-case"
import { ListAllRoutesUseCase } from "./list-all-routes.use-case"

describe('CreateRouteUseCase', () => {
  it('should list all routes', async () => {
    expect.assertions(2)

    const repository = new RouteInMemoryRepository()
    const create = new CreateRouteUseCase(repository)
    const list = new ListAllRoutesUseCase(repository)

    const routeProps = {
      title: "Test contructor",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 }
    };

    await create.execute(routeProps)
    const listAll = await list.execute()

    expect(listAll).toHaveLength(1)
    expect(listAll).toStrictEqual([{ id: repository.items[0].id, ...routeProps, points: [] }])
  })
})