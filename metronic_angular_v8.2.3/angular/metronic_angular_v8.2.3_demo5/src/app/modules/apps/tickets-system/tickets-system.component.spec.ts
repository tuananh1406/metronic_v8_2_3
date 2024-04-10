import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsSystemComponent } from './tickets-system.component';

describe('TicketsSystemComponent', () => {
  let component: TicketsSystemComponent;
  let fixture: ComponentFixture<TicketsSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
