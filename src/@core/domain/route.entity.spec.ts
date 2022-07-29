import { LatLng, Route, RouteProps } from "./route.entity";

describe("Route Entity", () => {
  it("constructor", () => {
    expect.assertions(3);

    let routeProps: RouteProps = {
      title: "Test contructor",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };

    let route = Route.create(routeProps);

    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [],
    });
    expect(route.id).toBeDefined()

    routeProps = {
      title: "Test contructor",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
      points: [{ lat: 4, lng: 5 }],
    };

    route = Route.create(routeProps);

    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [{ lat: 4, lng: 5 }],
    });
  });

  it("updateTitle", () => {
    const routeProps: RouteProps = {
      title: "Test title",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };

    const route = Route.create(routeProps);
    route.updateTitle("test title");

    expect(route.title).toBe("test title");
  });


  it("updatePosition", () => {

    const routeProps: RouteProps = {
      title: "Test positions",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };

    const startPosition: LatLng = { lat: 4, lng: 5 }
    const endPosition: LatLng = { lat: 6, lng: 7 }

    const route = Route.create(routeProps);
    route.updatePosition(startPosition, endPosition);

    expect(route.startPosition).toStrictEqual(startPosition);
    expect(route.endPosition).toStrictEqual(endPosition);
  });


  it("updatePoints", () => {

    const routeProps: RouteProps = {
      title: "Test points",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
      points: [{ lat: 4, lng: 5 }, { lat: 6, lng: 7 }],
    };

    const points: LatLng[] = [{ lat: 4, lng: 5 }, { lat: 6, lng: 7 }]

    const route = Route.create(routeProps);
    route.updatePoints(points);

    expect(route.points).toStrictEqual(points);
  });
});
