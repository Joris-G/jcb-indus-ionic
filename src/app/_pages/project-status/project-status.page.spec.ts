import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectStatusPage } from './project-status.page';

describe('ProjectStatusPage', () => {
  let component: ProjectStatusPage;
  let fixture: ComponentFixture<ProjectStatusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProjectStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
