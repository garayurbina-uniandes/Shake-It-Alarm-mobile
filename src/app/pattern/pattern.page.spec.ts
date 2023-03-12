import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatternPage } from './pattern.page';

describe('PatternPage', () => {
  let component: PatternPage;
  let fixture: ComponentFixture<PatternPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatternPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
