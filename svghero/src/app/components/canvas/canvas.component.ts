import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  AfterViewInit
} from "@angular/core";
import { CanvasService } from "src/app/services/canvas.service";
import { Point } from "src/app/model/tools";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.scss"]
})
export class CanvasComponent implements OnInit, AfterViewInit {
  @ViewChild("canvasContainer", { read: ElementRef })
  elCanvasContainer: ElementRef;

  @ViewChild('canvas', { read: ElementRef })
  elCanvas: ElementRef;

  isResizingCanvas = false;
  canvasHeight = 500;
  canvasWidth = 500;

  constructor(public canvasService: CanvasService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.canvasService.elCanvas = this.elCanvas;
  }

  @HostListener('document:keypress')
  onKeyDown() {
    this.canvasService.endPath();
  }

  startDraw(event) {
    const point: Point = {
      x: event.offsetX,
      y: event.offsetY
    };
    if (this.canvasService.isDrawing) {
      this.canvasService.addPoint(point);
    } else {
      this.canvasService.startPath(point);
    }
  }

  changePath(event) {
    if (this.canvasService.isDrawing) {
      const point: Point = {
        x: event.offsetX,
        y: event.offsetY
      };
      this.canvasService.changePath(point);
    }
  }

  /* Resize canvas logic -----------------------------*/
  styleCanvasSize() {
    return {
      height: `${this.canvasHeight}px`,
      width: `${this.canvasWidth}px`
    };
  }

  onCanvasResizeBegin() {
    this.isResizingCanvas = true;
  }

  @HostListener("document:mouseup")
  onCanvasResizeEnd() {
    this.isResizingCanvas = false;
  }

  @HostListener("document:mousemove", ["$event"])
  resizeCanvas(event) {
    if (!this.isResizingCanvas) {
      return;
    }
    this.canvasHeight =
      event.pageY - this.elCanvasContainer.nativeElement.offsetTop;
    this.canvasWidth =
      event.pageX - this.elCanvasContainer.nativeElement.offsetLeft;
  }
  /*---------------------------------------------------*/
}
