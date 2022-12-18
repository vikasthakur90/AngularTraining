import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirrectiveassignmentComponent } from './dirrectiveassignment.component';

describe('DirrectiveassignmentComponent', () => {
  let component: DirrectiveassignmentComponent;
  let fixture: ComponentFixture<DirrectiveassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirrectiveassignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirrectiveassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
