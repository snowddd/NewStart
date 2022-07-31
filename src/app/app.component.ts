import { MessageService } from './message.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(private messageSvc: MessageService) {

  }

  clearTopFive(): void {
    this.messageSvc.clearTopFive();
  }
}
