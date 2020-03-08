import { Component, OnInit } from "@angular/core";
import { CanvasService } from "src/app/services/canvas.service";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  host: { '[@routeAnimation]': 'true' },
  selector: "app-msg",
  templateUrl: "./msg.component.html",
  styleUrls: ["./msg.component.scss"],
  animations: [
    trigger("routeAnimation", [
      state("*", style({ transform: "translateX(0)", opacity: 1 })),
      transition(
        "* => void",
        animate(
          "0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)",
          style({
            
            opacity: 0
          })
        )
      )
    ])
  ]
})
export class MsgComponent implements OnInit {
  constructor(public canvasService: CanvasService) {}

  ngOnInit(): void {}
}
