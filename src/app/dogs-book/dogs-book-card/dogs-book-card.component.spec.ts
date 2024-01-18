import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsBookCardComponent } from './dogs-book-card.component';

describe('DogsBookCardComponent', () => {
  let component: DogsBookCardComponent;
  let fixture: ComponentFixture<DogsBookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogsBookCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DogsBookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
