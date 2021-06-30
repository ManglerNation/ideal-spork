import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdealSporkComponent } from './ideal-spork.component';

describe('IdealSporkComponent', () => {
  let component: IdealSporkComponent;
  let fixture: ComponentFixture<IdealSporkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdealSporkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdealSporkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
