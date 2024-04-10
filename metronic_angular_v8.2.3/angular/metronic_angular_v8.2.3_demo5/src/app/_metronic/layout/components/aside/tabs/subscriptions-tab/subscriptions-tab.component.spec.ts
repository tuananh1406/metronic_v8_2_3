import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsTabComponent } from './subscriptions-tab.component';

describe('SubscriptionsTabComponent', () => {
  let component: SubscriptionsTabComponent;
  let fixture: ComponentFixture<SubscriptionsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
