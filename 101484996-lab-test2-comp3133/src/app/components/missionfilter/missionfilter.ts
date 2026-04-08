import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  template: `
    <input
      type="number"
      placeholder="Enter Launch Year"
      (input)="onInput($event)"
    />
  `
})
export class Missionfilter {

  @Output() yearEvent = new EventEmitter<string>();

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.yearEvent.emit(value);
  }
}