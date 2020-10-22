import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  @Output() submitEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(value: string) {
    this.submitEvent.emit(value);
  }
}
