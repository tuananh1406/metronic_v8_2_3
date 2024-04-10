import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFormattingComponent } from './text-formatting.component';

describe('TextFormattingComponent', () => {
  let component: TextFormattingComponent;
  let fixture: ComponentFixture<TextFormattingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextFormattingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFormattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
