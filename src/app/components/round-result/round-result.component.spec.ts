import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundResultComponent } from './round-result.component';

describe('RoundResultComponent', () => {
  let component: RoundResultComponent;
  let fixture: ComponentFixture<RoundResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
