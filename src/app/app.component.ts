import { Component } from '@angular/core';
import { NavigationStart, Router, Event } from '@angular/router';

import { LoginService } from '../app/services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FOOD 24BY7 Admin';
}
