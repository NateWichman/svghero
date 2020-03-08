import { Component } from "@angular/core";
import { CanvasService } from "./services/canvas.service";
import { ToolType } from "./model/tools";
import { DownloadService } from "./services/download.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  ToolType = ToolType;

  constructor(
    public canvasService: CanvasService,
    public downloadService: DownloadService
  ) {}
}
