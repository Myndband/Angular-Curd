import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddngformComponent } from './addngform.component';

describe('AddngformComponent', () => {
  let component: AddngformComponent;
  let fixture: ComponentFixture<AddngformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddngformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddngformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
