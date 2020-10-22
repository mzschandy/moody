import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodListerComponent } from './mood-lister.component';

describe('MoodListerComponent', () => {
  let component: MoodListerComponent;
  let fixture: ComponentFixture<MoodListerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoodListerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
