import { Component, OnInit } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";
@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.css']
})
export class InputNameComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  values = "";
  onKey(value: string) {
    this.values = value
      .split("")
      .reverse()
      .join("");
  }

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
