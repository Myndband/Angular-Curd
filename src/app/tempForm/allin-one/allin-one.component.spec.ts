import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllinOneComponent } from './allin-one.component';

describe('AllinOneComponent', () => {
  let component: AllinOneComponent;
  let fixture: ComponentFixture<AllinOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllinOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllinOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
