import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChronoPage } from './chrono.page';

describe('ChronoPage', () => {
  let component: ChronoPage;
  let fixture: ComponentFixture<ChronoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChronoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
