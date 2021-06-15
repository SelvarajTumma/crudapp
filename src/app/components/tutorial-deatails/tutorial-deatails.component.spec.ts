import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialDeatailsComponent } from './tutorial-deatails.component';

describe('TutorialDeatailsComponent', () => {
  let component: TutorialDeatailsComponent;
  let fixture: ComponentFixture<TutorialDeatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialDeatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
