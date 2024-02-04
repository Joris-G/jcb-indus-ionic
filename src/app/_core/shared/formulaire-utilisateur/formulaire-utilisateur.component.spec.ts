import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormulaireUtilisateurComponent } from './formulaire-utilisateur.component';

describe('FormulaireUtilisateurComponent', () => {
  let component: FormulaireUtilisateurComponent;
  let fixture: ComponentFixture<FormulaireUtilisateurComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireUtilisateurComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormulaireUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
