import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerNamesComponent } from './player-names.component';

describe('PlayerNamesComponent', () => {
  let component: PlayerNamesComponent;
  let fixture: ComponentFixture<PlayerNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerNamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
