import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogineComponent } from './logine.component';

describe('LogineComponent', () => {
  let component: LogineComponent;
  let fixture: ComponentFixture<LogineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
