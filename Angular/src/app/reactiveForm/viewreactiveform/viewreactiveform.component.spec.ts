import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreactiveformComponent } from './viewreactiveform.component';

describe('ViewreactiveformComponent', () => {
  let component: ViewreactiveformComponent;
  let fixture: ComponentFixture<ViewreactiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewreactiveformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
