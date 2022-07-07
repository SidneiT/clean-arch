import crypto from 'crypto';
export type LatLng = { lat: number; lng: number };

export type RouteProps = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};

export class Route {
  public readonly id: string;
  public props: Required<RouteProps>;

  constructor(props: RouteProps, id?: string) {
    this.id = id || crypto.randomUUID();
    this.props = { ...props, points: props.points || [] };
  }

  //methods

  updateTitle(title: string) {
    this.title = title;
  }

  updatePosition(startPosition: LatLng, endPosition: LatLng) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  updatePoints(points: LatLng[]) {
    this.points = points;
  }

  toJson() {
    return { id: this.id, ...this.props };
  }

  //getters

  get title(): string {
    return this.props.title;
  }

  get startPosition(): LatLng {
    return this.props.startPosition;
  }

  get endPosition(): LatLng {
    return this.props.endPosition;
  }

  get points(): LatLng[] {
    return this.props.points;
  }

  //setters

  private set title(value: string) {
    this.props.title = value;
  }

  private set startPosition(value: LatLng) {
    this.props.startPosition = value;
  }

  private set endPosition(value: LatLng) {
    this.props.endPosition = value;
  }

  private set points(value: LatLng[]) {
    this.props.points = value;
  }
}
