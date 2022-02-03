import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitySlideComponent } from './opportunity-slide.component';

describe('OpportunitySlideComponent', () => {
  let component: OpportunitySlideComponent;
  let fixture: ComponentFixture<OpportunitySlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunitySlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitySlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
