import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsBookListComponent } from './dogs-book-list.component';

describe('DogsBookListComponent', () => {
  let component: DogsBookListComponent;
  let fixture: ComponentFixture<DogsBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogsBookListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DogsBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
