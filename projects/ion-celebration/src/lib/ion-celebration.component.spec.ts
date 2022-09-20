import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonCelebrationComponent } from './ion-celebration.component';

describe('IonCelebrationComponent', () => {
  let component: IonCelebrationComponent;
  let fixture: ComponentFixture<IonCelebrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IonCelebrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IonCelebrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
