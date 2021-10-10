import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsAccompagneComponent } from './informations-accompagne.component';

describe('InformationsComponent', () => {
  let component: InformationsAccompagneComponent;
  let fixture: ComponentFixture<InformationsAccompagneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationsAccompagneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsAccompagneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
