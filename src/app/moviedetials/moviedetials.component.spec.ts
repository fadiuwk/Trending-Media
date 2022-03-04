import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedetialsComponent } from './moviedetials.component';

describe('MoviedetialsComponent', () => {
  let component: MoviedetialsComponent;
  let fixture: ComponentFixture<MoviedetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviedetialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
