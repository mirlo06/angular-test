import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesItemComponent } from './opportunities-item.component';

describe('OpportunitiesItemComponent', () => {
  let component: OpportunitiesItemComponent;
  let fixture: ComponentFixture<OpportunitiesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunitiesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitiesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
