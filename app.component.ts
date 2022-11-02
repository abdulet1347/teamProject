import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'UpdatedProgress';
  load1: any = '100';
  load2: any = '50';
  load3: any = '70';
  load4: any = '100';
  load5: any = 'Not Started';
  percentage = '%';
 }
