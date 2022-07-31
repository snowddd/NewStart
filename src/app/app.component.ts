import { JsonFileService } from './util/jsonfile/jsonfile.service';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  link1 = '';
  link2 = '';

  constructor(private messageSvc: MessageService, public heroSvc: HeroService, private dashboardSvc: JsonFileService) {
    this.dashboardSvc.getLinkName().subscribe(
      (ln) => {
        this.link1 = ln.dashboard;
        this.link2 = ln.heroes;
      }
    )
  }

  clearTopFive(): void {
    this.messageSvc.clearTopFive();
  }
}
