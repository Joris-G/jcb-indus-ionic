import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionListPage } from './action-list.page';

describe('ActionListPage', () => {
  let component: ActionListPage;
  let fixture: ComponentFixture<ActionListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
