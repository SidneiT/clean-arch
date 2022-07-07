import { Route } from "../../domain/route.entity";
import { RouteInMemoryRepository } from "./route-in-memory.repository";

describe('RouteInMemoryRepository', () => {

  it('should be a function', async () => {
    const repository = new RouteInMemoryRepository()

    const routeProps = {
      title: "Test contructor",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
      points: [{ lat: 4, lng: 5 }],
    };

    const route1 = new Route(routeProps);
    const route2 = new Route({ ...routeProps, title: "Test contructor 3" });

    await repository.insert(route1)
    await repository.insert(route2)

    expect(repository.items).toStrictEqual([route1, route2])
    expect(repository.items).toHaveLength(2)
  })

});