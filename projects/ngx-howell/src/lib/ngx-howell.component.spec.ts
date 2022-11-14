import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHowellComponent } from './ngx-howell.component';

describe('NgxHowellComponent', () => {
  let component: NgxHowellComponent;
  let fixture: ComponentFixture<NgxHowellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxHowellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxHowellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
