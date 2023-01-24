import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlockDetailsModalComponent } from './edit-block-details-modal.component';

describe('EditBlockDetailsModalComponent', () => {
  let component: EditBlockDetailsModalComponent;
  let fixture: ComponentFixture<EditBlockDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditBlockDetailsModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditBlockDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
