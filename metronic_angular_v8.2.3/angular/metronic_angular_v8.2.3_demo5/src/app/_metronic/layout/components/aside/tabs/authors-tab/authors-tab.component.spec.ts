import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsTabComponent } from './authors-tab.component';

describe('AuthorsTabComponent', () => {
  let component: AuthorsTabComponent;
  let fixture: ComponentFixture<AuthorsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
