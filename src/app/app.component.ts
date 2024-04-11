import { Component } from '@angular/core';
import { IField } from 'projects/ngx-table-list/src/public-api';
import { DATAS_CONFIG, FIELDS_CONFIG } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public fields: IField[] = FIELDS_CONFIG;
  public data = DATAS_CONFIG;
}
