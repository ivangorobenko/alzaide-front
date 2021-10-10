import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDeBordComponentAccompagnant } from './tableau-de-bord-component-accompagnant.component';

describe('LaisserMessageComponent', () => {
  let component: TableauDeBordComponentAccompagnant;
  let fixture: ComponentFixture<TableauDeBordComponentAccompagnant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauDeBordComponentAccompagnant ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauDeBordComponentAccompagnant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
