import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewngformComponent } from './viewngform.component';

describe('ViewngformComponent', () => {
  let component: ViewngformComponent;
  let fixture: ComponentFixture<ViewngformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewngformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewngformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
