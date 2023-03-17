import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditngformComponent } from './editngform.component';

describe('EditngformComponent', () => {
  let component: EditngformComponent;
  let fixture: ComponentFixture<EditngformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditngformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditngformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
