import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialAchievementsComponent } from './special-achievements.component';

describe('SpecialAchievementsComponent', () => {
  let component: SpecialAchievementsComponent;
  let fixture: ComponentFixture<SpecialAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
