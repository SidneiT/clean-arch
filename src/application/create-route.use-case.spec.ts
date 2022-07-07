import { RouteInMemoryRepository } from "../infra/db/route-in-memory.repository"
import { CreateRouteUseCase } from "./create-route.use-case"

describe('CreateRouteUseCase', () => {
  it('should create a new route', async () => {
    expect.assertions(2)

    const repository = new RouteInMemoryRepository()
    const useCase = new CreateRouteUseCase(repository)

    const routeProps = {
      title: "Test contructor",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 }
    };

    const routeJson = await useCase.execute(routeProps)

    expect(repository.items).toHaveLength(1)
    expect(routeJson).toStrictEqual({ id: repository.items[0].id, ...routeProps, points: [] })
  })
})