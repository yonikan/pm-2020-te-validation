import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() eventIndex: number;
  @Input() eventData: any;
  @Output() confirmSessionEmitter = new EventEmitter<any>();
  @Output() convertSessionEmitter = new EventEmitter<string>();
  @Output() deleteSessionEmitter = new EventEmitter<string>();
  isValidated = false;

  constructor() { }

  ngOnInit() {
    console.log(this.eventData);
  }

  confirmSession() {
    const test = {
      teamEventId: this.eventData.id,
      teamEventType: this.eventData.type
    };
    console.log('test: ', test);
    this.confirmSessionEmitter.emit(test);
  }

  convertSession(eventId) {
    this.convertSessionEmitter.emit(eventId);
  }

  deleteSession(eventId) {
    this.deleteSessionEmitter.emit(eventId);
  }
}
