import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreactiveformComponent } from './addreactiveform.component';

describe('AddreactiveformComponent', () => {
  let component: AddreactiveformComponent;
  let fixture: ComponentFixture<AddreactiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddreactiveformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
