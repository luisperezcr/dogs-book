import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsBookDetailViewComponent } from './dogs-book-detail-view.component';

describe('DogsBookDetailViewComponent', () => {
  let component: DogsBookDetailViewComponent;
  let fixture: ComponentFixture<DogsBookDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogsBookDetailViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DogsBookDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
