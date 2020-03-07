import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener
} from "@angular/core";
import { CanvasService } from "src/app/services/canvas.service";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.scss"]
})
export class CanvasComponent implements OnInit {
  @ViewChild("canvasContainer", { read: ElementRef })
  elCanvasContainer: ElementRef;


  isResizingCanvas = false;
  canvasHeight = 500;
  canvasWidth = 500;

  constructor(public canvasService: CanvasService) {}

  ngOnInit(): void {}

  /* Resize canvas logic -----------------------------*/
  styleCanvasSize() {
    return {
      height: `${this.canvasHeight}px`,
      width: `${this.canvasWidth}px`,
      backgroundColor: '#fff',
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
