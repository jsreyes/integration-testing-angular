/* PRUEBAS DE INTEGRACIÓn */
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    // Declaración dinámica como el NgModules
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });

    // Se le pasa el componente a crear
    fixture = TestBed.createComponent(VoterComponent);
    // Obtiene la instancia del componente
    component = fixture.componentInstance;
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    // Se agrega detect changes para que escuche los cambios
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.vote-count'));
    const el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('21');
  });

  // Esta prueba valida que se ponga la propiedad highlighted cuando he votado
  it('should highlight the upvote button if I have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    // Assert
    expect(de.classes['highlighted']).toBeTruthy();
  });

  // Prueba para el evento upVote()
  it('should increase total votes when I click the upvoted button', () => {

    const button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    // Act
    button.triggerEventHandler('click', null);

    // Assert
    expect(component.totalVotes).toBe(1);
  });
});
