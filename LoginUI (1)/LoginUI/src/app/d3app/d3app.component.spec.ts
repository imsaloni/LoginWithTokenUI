import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3appComponent } from './d3app.component';

describe('D3appComponent', () => {
  let component: D3appComponent;
  let fixture: ComponentFixture<D3appComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [D3appComponent]
    });
    fixture = TestBed.createComponent(D3appComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
