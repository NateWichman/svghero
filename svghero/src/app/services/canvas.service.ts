import { Injectable, ElementRef } from "@angular/core";
import { ToolType, Path, Point } from "../model/tools";

@Injectable({
  providedIn: "root"
})
export class CanvasService {
  elCanvas: ElementRef;
  msg: string;
  toolType: ToolType;
  paths: Path[] = [];
  selectedPath: Path;
  isDrawing = false;

  constructor() {}

  setTool(tool: ToolType) {
    this.toolType = tool;
  }

  startPath(point: Point) {
    this.msg = 'type any key to end path';
    this.isDrawing = true;
    const path = new Path();
    path.points.push(point);
    this.paths.push(path);
    this.selectedPath = path;
  }

  changePath(point: Point) {
    this.selectedPath.tempEndpoint = point;
  }

  addPoint(point: Point) {
    this.selectedPath.points.push(point);
  }

  endPath() {
    this.msg = null;
    if (this.selectedPath) {
      this.selectedPath.tempEndpoint = null;
    }
    this.selectedPath = null;
    this.isDrawing = false;
  }
}
