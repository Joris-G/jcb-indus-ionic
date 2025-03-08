import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChronoSearchAndCreationComponent } from './chrono-search-and-creation.component';

describe('ChronoSearchAndCreationComponent', () => {
  let component: ChronoSearchAndCreationComponent;
  let fixture: ComponentFixture<ChronoSearchAndCreationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChronoSearchAndCreationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChronoSearchAndCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
