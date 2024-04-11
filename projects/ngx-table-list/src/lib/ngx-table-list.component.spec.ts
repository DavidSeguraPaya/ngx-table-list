import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTableListComponent } from './ngx-table-list.component';

describe('NgxTableListComponent', () => {
  let component: NgxTableListComponent;
  let fixture: ComponentFixture<NgxTableListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxTableListComponent]
    });
    fixture = TestBed.createComponent(NgxTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
