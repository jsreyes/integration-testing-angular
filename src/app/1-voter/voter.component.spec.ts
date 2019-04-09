/* PRUEBAS DE INTEGRACIÓn */
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { By } from '@angular/platform-browser';
import { VoterComponent } from "./voter.component";

describe("VoterComponent", () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>

  beforeEach(() => {

    // Declaración dinámica como el NgModules
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    })

    // Se le pasa el componente a crear
    fixture = TestBed.createComponent(VoterComponent);
    // Obtiene la instancia del componente
    component = fixture.componentInstance;
  });

  it("should render total votes", () => {
    component.othersVote = 20;
    component.myVote = 1;

    let de = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain(21);
  });
});
