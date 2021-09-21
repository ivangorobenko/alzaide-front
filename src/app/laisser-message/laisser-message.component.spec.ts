import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaisserMessageComponent } from './laisser-message.component';

describe('LaisserMessageComponent', () => {
  let component: LaisserMessageComponent;
  let fixture: ComponentFixture<LaisserMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaisserMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaisserMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
