export enum ToolType {
  Path = 0
}

export class Path {
  points: Point[] = [];
  tempEndpoint: Point;

  getPath() {
    let path = "M ";
    this.points.forEach(p => (path += " " + p.x + " " + p.y + ","));

    if (this.tempEndpoint) {
        path += ' ' + this.tempEndpoint.x + ' ' + this.tempEndpoint.y;
    }
    return path;
  }
}

export interface Point {
  x: number;
  y: number;
}
