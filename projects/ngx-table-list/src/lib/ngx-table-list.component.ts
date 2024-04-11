import { Component, ElementRef, Input, OnChanges } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

interface DataItem<T> {
  [key: string]: T;
}

export interface IField {
  label: string;
  attr: string;
}

@Component({
  standalone: true,
  selector: 'ngx-table-list[fields]',
  templateUrl: 'ngx-table-list.component.html',
  styleUrls: ['ngx-table-list.component.css'],
  imports: [BrowserModule],
})
export class NgxTableListComponent implements OnChanges {
  @Input('data') data: DataItem<any>[] = [];
  @Input() fields: IField[] = [];

  public numColumns: number = 1;

  constructor(private host: ElementRef<HTMLElement>) {}

  public ngOnChanges(): void {
    if (this.data.length > 0) {
      this.numColumns = Object.keys(this.data[0]).length + 1;
    } else {
      this.numColumns = 1;
    }

    this.host.nativeElement.style.setProperty(
      `--num-columns`,
      this.numColumns.toString()
    );
  }
}
